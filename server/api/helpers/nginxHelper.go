package helpers

import (
	"fmt"
	"os"
	"os/exec"
)

// SetupNginx creates a new Nginx config for the client and reloads Nginx
func SetupNginx(clientName, serverPort string) error {
	clientDomain := fmt.Sprintf("%s.yourdomain.com", clientName)
	nginxConfig := fmt.Sprintf(`
server {
    server_name %s;
    location / {
        proxy_pass http://localhost:%s;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
`, clientDomain, serverPort)

	nginxConfigPath := fmt.Sprintf("/etc/nginx/sites-available/%s", clientDomain)
	err := os.WriteFile(nginxConfigPath, []byte(nginxConfig), 0644)
	if err != nil {
		return err
	}

	// Symlink config to enable it
	symlinkPath := fmt.Sprintf("/etc/nginx/sites-enabled/%s", clientDomain)
	if err := os.Symlink(nginxConfigPath, symlinkPath); err != nil {
		return err
	}

	// Reload Nginx to apply the new config
	cmd := exec.Command("nginx", "-s", "reload")
	return cmd.Run()
}

// RemoveNginxConfig removes the Nginx configuration for the client
func RemoveNginxConfig(clientName string) error {
	clientDomain := fmt.Sprintf("%s.yourdomain.com", clientName)
	configPath := fmt.Sprintf("/etc/nginx/sites-available/%s", clientDomain)
	symlinkPath := fmt.Sprintf("/etc/nginx/sites-enabled/%s", clientDomain)

	// Remove the configuration file and symlink
	if err := os.Remove(configPath); err != nil {
		return err
	}
	if err := os.Remove(symlinkPath); err != nil {
		return err
	}

	// Reload Nginx to apply changes
	cmd := exec.Command("nginx", "-s", "reload")
	return cmd.Run()
}
