package main

import (
	"imdewan/applitainer/api/controllers"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	// Define routes
	router.POST("/api/client/create", controllers.CreateClient)
	router.POST("/api/client/deploy", controllers.DeployClient)
	router.DELETE("/api/client/delete", controllers.DeleteClient)
	router.POST("/api/client/stop", controllers.StopClient)
	router.POST("/api/client/start", controllers.StartClient)

	// Start the server on port 8080
	router.Run(":8080")
}
