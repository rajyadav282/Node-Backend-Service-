# Node.js Backend Service

This project is a Node.js backend service that provides REST APIs to perform CRUD (Create, Read, Update, Delete) operations on a database. The application is dockerized and includes Continuous Integration (CI) to build a Docker image whenever code is pushed to the `main` branch.



## Features

- Create REST APIs to perform CRUD operations on the database.
- Dockerized application for consistent and scalable deployment.
- CI setup to automatically build a Docker image on code push to the `master` branch.

## Technology Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **Database**: Mysql 
- **Docker**: Containerization platform.
- **CI**: Github CI 



## Setup Instructions

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rajyadav282/SyvoraAssignment.git
   cd /Syvora

## Docker

1. **Build the Docker image:**
   ```bash
   docker build -t myserver .

2. **Run the Docker image:**
    ```bash
    docker run -d -p 3000:3000 myserver:latest

## Continuous Integration (CI)

1. **The CI pipeline is configured to build a Docker image and push it to your container registry whenever code is pushed to the  `master` branch.**
2. **GitHub Actions/GitLab CI: The CI configuration is defined in .github/workflows/ci.yml**
   
## API Endpoints

1. **Post _ k** : Creates a new resource
2. **GET /api/resource** : Retrive a specific resource by ID.
3. **PUT /api/resource/** : Updates a specific resource by ID.
4. **DELETE /api/resource** : Deletes a specific resource by ID
   
   

   
