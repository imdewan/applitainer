package helpers

import (
	"fmt"
	"os"
	"os/exec"
	"regexp"
	"strings"
)

// CloneRepo clones a client's Next.js repo into a specified directory
func CloneRepo(gitRepoURL, baseDir string) error {
	cmd := exec.Command("git", "clone", gitRepoURL, baseDir)
	output, err := cmd.CombinedOutput()
	if err != nil {
		return fmt.Errorf("error cloning repository: %v, output: %s", err, string(output))
	}
	return nil
}

// CreateDockerfile generates a Dockerfile for the client’s Next.js app
func CreateDockerfile(baseDir string, servertype string) error {
	var dockerfile string
	if(servertype == "bun") {
		dockerfile = `
# Use oven/bun:latest as the base image for Bun projects
FROM oven/bun:latest AS base

# Set the working directory inside the container
WORKDIR /app

# Copy necessary files for dependency installation
COPY package.json bun.lockb ./

# Install dependencies using Bun
RUN bun install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN bun run build

# Use the same oven/bun image for the production environment
FROM oven/bun:latest AS runner

# Set the working directory inside the production container
WORKDIR /app

# Copy the build output from the previous stage
COPY --from=base /app/ ./

# Expose the port Bun will listen on
EXPOSE 3000

# Set environment variables for the production environment
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Run the application using Bun
CMD ["bun", "server.js"]
`
	}else if(servertype == "npm"||servertype == "pnpm"||servertype == "yarn") {
	dockerfile = `
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi


# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED=1

RUN \
  if [ -f yarn.lock ]; then yarn run build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
ENV HOSTNAME="0.0.0.0"
CMD ["node", "server.js"]
`
	}else {
		return fmt.Errorf("invalid servertype: %s", servertype)
	}
	filePath := fmt.Sprintf("%s/Dockerfile", baseDir)
	return os.WriteFile(filePath, []byte(dockerfile), 0644)
}

// StartDockerContainer starts the Docker container with memory and CPU limits
func StartDockerContainer(clientName, memoryLimit, cpuLimit, serverPort string) error {
	imageName := fmt.Sprintf("%s_nextjs_app", clientName)
	containerName := fmt.Sprintf("%s_nextjs_container", clientName)
	baseDir := fmt.Sprintf("%s/clients/%s", "/Users/mrdsa04/Documents/go/next-hosting/api", clientName)// Update with your username

	// Build the Docker image
	fmt.Println("docker", "build", "-t", imageName, baseDir)
	cmd := exec.Command("docker", "build", "-t", imageName, baseDir)
	output, err := cmd.CombinedOutput()
	if err != nil {
		return fmt.Errorf("error building Docker image: %v, output: %s", err, string(output))
	}

	// Run the Docker container with resource limits
	fmt.Println("docker", "run", "-d", "--memory", memoryLimit, "--cpus", cpuLimit, "-p", serverPort+":3000", "--name", containerName, imageName)
	cmd = exec.Command("docker", "run", "-d", "--memory", memoryLimit, "--cpus", cpuLimit, "-p", serverPort+":3000", "--name", containerName, imageName)
	output, err = cmd.CombinedOutput()
	if err != nil {
		return fmt.Errorf("error starting Docker container: %v, output: %s", err, string(output))
	}
	return nil
}
// CreateDockerIgnoreFile generates a .dockerignore file to exclude unnecessary files from the Docker build context
func CreateDockerIgnoreFile(baseDir string) error {
	dockerIgnoreContent := `
Dockerfile
.dockerignore
node_modules
npm-debug.log
README.md
.next
.git
`
	filePath := fmt.Sprintf("%s/.dockerignore", baseDir)
	return os.WriteFile(filePath, []byte(dockerIgnoreContent), 0644)
}

// StopDockerContainer stops and removes the Docker container
func StopDockerContainer(clientName string) error {
	containerName := fmt.Sprintf("%s_nextjs_container", clientName)
	cmd := exec.Command("docker", "stop", containerName)
	if err := cmd.Run(); err != nil {
		return err
	}
	cmd = exec.Command("docker", "rm", containerName)
	return cmd.Run()
}

// DeployApp pulls the latest changes from the repository and redeploys
func DeployApp(baseDir string) error {
	cmd := exec.Command("git", "-C", baseDir, "pull")
	return cmd.Run()
}
// UpdateNextConfig updates the next.config.js file to include output: "standalone"
func UpdateNextConfig(baseDir string) error {
	configPaths := []string{
		fmt.Sprintf("%s/next.config.js", baseDir),
		fmt.Sprintf("%s/next.config.mjs", baseDir),
	}

	for _, configPath := range configPaths {
		configContent, err := os.ReadFile(configPath)
		if err != nil {
			if os.IsNotExist(err) {
				continue // Skip if the file does not exist
			}
			return fmt.Errorf("error reading %s: %v", configPath, err)
		}

		if !containsStandaloneOutput(configContent) {
			configContent = appendStandaloneOutput(configContent)
			// Ensure the config content is valid JavaScript by removing any trailing commas
			configContent = removeTrailingComma(configContent)
			if err := os.WriteFile(configPath, configContent, 0644); err != nil {
				return fmt.Errorf("error writing %s: %v", configPath, err)
			}
		}
	}

	return nil
}

// removeTrailingComma removes any trailing commas before closing braces or brackets
func removeTrailingComma(configContent []byte) []byte {
	configString := string(configContent)
	configString = strings.ReplaceAll(configString, ", }", " }")
	configString = strings.ReplaceAll(configString, ", ]", " ]")
	configString = removeDoubleComma(configString)
	return []byte(configString)
}

// removeDoubleComma removes any double commas ignoring whitespace
func removeDoubleComma(configString string) string {
	re := regexp.MustCompile(`,\s*,`)
	return re.ReplaceAllString(configString, ",")
}

// containsStandaloneOutput checks if the next.config.js content includes output: "standalone"
func containsStandaloneOutput(configContent []byte) bool {
	return strings.Contains(string(configContent), `output: "standalone"`)
}

// appendStandaloneOutput appends output: "standalone" to the next.config.js content
func appendStandaloneOutput(configContent []byte) []byte {
	configString := string(configContent)
	insertIndex := strings.LastIndex(configString, "}")
	if insertIndex == -1 {
		return configContent
	}

	updatedConfig := configString[:insertIndex] + `, output: "standalone"` + configString[insertIndex:]
	return []byte(updatedConfig)
}

func RemoveRepo(baseDir string) error {
	return os.RemoveAll(baseDir)
}

func DeleteDockerImage(clientName string) error {
	imageName := fmt.Sprintf("%s_nextjs_app", clientName)
	cmd := exec.Command("docker", "rmi", imageName)
	return cmd.Run()
}
func DeleteDockerContainer(clientName string) error {
	containerName := fmt.Sprintf("%s_nextjs_container", clientName)
	cmd := exec.Command("docker", "rm", containerName)
	return cmd.Run()
}

func GetDockerContainerStatus(clientName string) (string, error) {
	containerName := fmt.Sprintf("%s_nextjs_container", clientName)
	cmd := exec.Command("docker", "inspect", "--format='{{.State.Status}}'", containerName)
	output, err := cmd.CombinedOutput()
	if err != nil {
		return "", fmt.Errorf("error getting container status: %v, output: %s", err, string(output))
	}
	return string(output), nil
}
func GetDockerContainerLogs(clientName string) (string, error) {
	containerName := fmt.Sprintf("%s_nextjs_container", clientName)
	cmd := exec.Command("docker", "logs", containerName)
	output, err := cmd.CombinedOutput()
	if err != nil {
		return "", fmt.Errorf("error getting container logs: %v, output: %s", err, string(output))
	}
	return string(output), nil
}
func GetDockerImageSize(clientName string) (string, error) {
	imageName := fmt.Sprintf("%s_nextjs_app", clientName)
	cmd := exec.Command("docker", "image", "inspect", "--format='{{.Size}}'", imageName)
	output, err := cmd.CombinedOutput()
	if err != nil {
		return "", fmt.Errorf("error getting image size: %v, output: %s", err, string(output))
	}
	return string(output), nil
}
func GetDockerContainerSize(clientName string) (string, error) {
	containerName := fmt.Sprintf("%s_nextjs_container", clientName)
	cmd := exec.Command("docker", "inspect", "--format='{{.Size}}'", containerName)
	output, err := cmd.CombinedOutput()
	if err != nil {
		return "", fmt.Errorf("error getting container size: %v, output: %s", err, string(output))
	}
	return string(output), nil
}
func GetDockerMemoryUsage(clientName string) (string, error) {
	containerName := fmt.Sprintf("%s_nextjs_container", clientName)
	cmd := exec.Command("docker", "stats", "--no-stream", containerName, "--format='{{.MemUsage}}'")
	output, err := cmd.CombinedOutput()
	if err != nil {
		return "", fmt.Errorf("error getting memory usage: %v, output: %s", err, string(output))
	}
	return string(output), nil
}