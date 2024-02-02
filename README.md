# Project README

This project contains a web application built with React and Vite, an API developed in Node.js, a NoSQL MongoDB database, and utilizes Docker containers for deployment. Additionally, it includes a web server and reverse proxy setup using NGINX for handling incoming requests. This README provides an overview of the project structure, setup instructions, and other relevant details.

## Table of Contents

- [Project Overview](#project-overview)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project aims to demonstrate a modern web development setup using popular technologies such as React, Vite, Node.js, MongoDB, Docker, and NGINX. The combination of these technologies allows for efficient development, containerization, and deployment of web applications.

- **Node.js API**: Provides backend functionality and interacts with the database.
- **React with Vite**: Frontend application built with React and utilizing Vite as the bundler for fast development and optimized builds.
- **MongoDB Database**: NoSQL database used for storing application data.
- **NGINX**: Acts as a web server and reverse proxy to handle incoming requests and distribute them to the appropriate services.
- **Docker**: Containerizes each component of the application for easy deployment and scalability.

## Project Structure

```
project-root/
│
├── api/                  # Node.js API
│   ├── Dockerfile        # Dockerfile for API service
│   └── ...               # Other API-related files
│
├── web/                  # React Web Application
│   ├── Dockerfile        # Dockerfile for web app service
│   └── ...               # Other web app-related files
│
├── server/               # NGINX Configuration
│   ├── Dockerfile        # Dockerfile for nginx service
│   ├── custom.conf       # NGINX configuration file
│   └── ...               # Other NGINX-related files
│
├── docker-compose.yml    # Docker Compose configuration for
│                           orchestrating containers
└── README.md             # Project README (you are here)
```

## Setup Instructions

To run this project locally, follow these steps:

1. **Clone Repository**: Clone this repository to your local machine.

2. **Navigate to Project Directory**: Open a terminal and navigate to the project root directory.

3. **Build Docker Containers**: Run `docker-compose build` to build the Docker containers defined in the `docker-compose.yml` file.

4. **Start Containers**: Run `docker-compose up` to start the containers.

5. **Access Application**: Once the containers are running, you can access the application by navigating to `http://localhost:9000` in your web browser.

## Usage

- The Node.js API endpoints can be accessed at `http://localhost:9000/api`.
- The React web application is accessible at `http://localhost:9000`.

## Contributing

Contributions to this project are welcome. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your fork.
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.