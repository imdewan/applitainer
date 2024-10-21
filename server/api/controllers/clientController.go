package controllers

import (
	"imdewan/applitainer/api/helpers" // Update based on your project structure
	"net/http"
	"os"
	"os/user"
	"path/filepath"

	"github.com/gin-gonic/gin"
)

// Struct to handle input JSON for client requests
type ClientRequest struct {
	ClientName  string `json:"clientName"`
	GitRepoURL  string `json:"gitRepoUrl"`
	MemoryLimit string `json:"memoryLimit"`
	CPULimit    string `json:"cpuLimit"`
	ServerType  string `json:"serverType"`
}

// Create a new Next.js app for a client
func CreateClient(c *gin.Context) {
	var clientReq ClientRequest
	if err := c.ShouldBindJSON(&clientReq); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Get the home directory of the current user
	//usr, err := user.Current()
	// if err != nil {
	// 	c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to fetch user home directory"})
	// 	return
	// }

	// Use a directory in the user's home folder for local testing
	baseDir := filepath.Join("/Users/mrdsa04/Documents/go/next-hosting/api/clients", clientReq.ClientName)
	serverPort := "8081" // Assign a random port or use a better approach

	// Create the base directory
	if err := os.MkdirAll(baseDir, 0755); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Unable to create client directory"})
		return
	}

	// Clone the client's Git repository
	if err := helpers.CloneRepo(clientReq.GitRepoURL, baseDir); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error cloning repo: " + err.Error()})
		helpers.RemoveRepo(baseDir);
		return
	}

	// Create a Dockerfile and start a Docker container with resource limits
	if err := helpers.CreateDockerfile(baseDir, clientReq.ServerType); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error creating Dockerfile: " + err.Error()})
		helpers.RemoveRepo(baseDir);
		return
	}
	if err := helpers.CreateDockerIgnoreFile(baseDir); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error creating .dockerignore file: " + err.Error()})
		helpers.RemoveRepo(baseDir);
		return
	}
	if err:= helpers.UpdateNextConfig(baseDir); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error updating next config: " + err.Error()})
		helpers.RemoveRepo(baseDir);
		return
	}

	if err := helpers.StartDockerContainer(clientReq.ClientName, clientReq.MemoryLimit, clientReq.CPULimit, serverPort); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error starting Docker container: " + err.Error()})
		helpers.RemoveRepo(baseDir);
		return
	}
	// Nginx setup can be skipped for local testing if needed
	c.JSON(http.StatusCreated, gin.H{"message": "Client created locally", "clientName": clientReq.ClientName})
}

// Deploy an update to a Next.js app
func DeployClient(c *gin.Context) {
	var clientReq ClientRequest
	if err := c.ShouldBindJSON(&clientReq); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Get the home directory of the current user
	usr, _ := user.Current()
	baseDir := filepath.Join(usr.HomeDir, "clients", clientReq.ClientName)

	if err := helpers.DeployApp(baseDir); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "App deployed successfully"})
}

// Delete a client's app and associated resources
func DeleteClient(c *gin.Context) {
	var clientReq ClientRequest
	if err := c.ShouldBindJSON(&clientReq); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Stop and remove Docker container
	if err := helpers.StopDockerContainer(clientReq.ClientName); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	// Delete local directory for the client
	usr, _ := user.Current()
	baseDir := filepath.Join(usr.HomeDir, "clients", clientReq.ClientName)
	if err := os.RemoveAll(baseDir); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error deleting client directory: " + err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Client deleted", "clientName": clientReq.ClientName})
}

// Stop a client's Docker container
func StopClient(c *gin.Context) {
	var clientReq ClientRequest
	if err := c.ShouldBindJSON(&clientReq); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := helpers.StopDockerContainer(clientReq.ClientName); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Container stopped", "clientName": clientReq.ClientName})
}

// Start a client's Docker container
func StartClient(c *gin.Context) {
	var clientReq ClientRequest
	if err := c.ShouldBindJSON(&clientReq); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	serverPort := "8081" // Assign a random port or use a better approach

	if err := helpers.StartDockerContainer(clientReq.ClientName, clientReq.MemoryLimit, clientReq.CPULimit, serverPort); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Container started", "clientName": clientReq.ClientName})
}
