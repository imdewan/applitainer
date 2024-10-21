# Applitainer

Applitainer is a shared portable Vercel alternative for hosting Node.js and Next.js web applications with CI/CD pipelines. It is designed to be deployed in each server's `server` folder, which is built using Golang, and connected to the `website` folder where the Next.js website resides.

## Features

- **Portable Hosting**: Easily deploy your web applications across multiple servers.
- **CI/CD Pipelines**: Integrated continuous integration and continuous deployment for seamless updates.
- **Node.js and Next.js Support**: Optimized for modern web applications built with Node.js and Next.js.
- **Golang Backend**: High-performance backend built with Golang.

## Getting Started

### Prerequisites

- Node.js
- Next.js
- Golang

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/imdewan/applitainer.git
   ```

2. Navigate to the `server` folder and build the Golang backend:

   ```sh
   cd applitainer/server/api
   go run main.go
   ```

3. Navigate to the `website` folder and install dependencies:

   ```sh
   cd ../website
   bun install
   ```

4. Deploy the application:

   ```sh
   # Start the Golang server
   ./server/server

   # Start the Next.js application
   bun run dev
   ```

## Usage

- Access your application at `http://localhost:3000`.
- Configure your CI/CD pipelines to automatically deploy updates to the `server` and `website` folders.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the Apache 2.0.

## Contact

For any questions or support, please contact https://mrdsa.dev
