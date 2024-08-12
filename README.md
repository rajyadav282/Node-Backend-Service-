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

1. **POST http://localhost:3000/users** : Creates a new resource
2. **GET http://localhost:3000/users : Retrive a specific resource by ID.
3. **PUT http://localhost:3000/users/** : Updates a specific resource by ID.
4. **DELETE http://localhost:3000/users/** : Deletes a specific resource by ID


## Kubernetes Deployment

  Kubernetes manifests are provided to deploy the application with a minimum of 2 pod replicas

  **Deployment Menifest**
  Create a k8s/deployment.yml file:
   ```bash
   apiVersion: apps/v1
   kind: Deployment
   metadata:
      name: nodejs-crud-deployment
   spec:
     replicas: 2
     selector:
       matchLabels:
         app: nodejs-crud
    template:
       metadata:
         labels:
           app: nodejs-crud
       spec:
         containers:
         - name: nodejs-crud-container
           image: rajyadav282/syvora:latest
           ports:
           - containerPort: 3000
           envFrom:
           - secretRef:
                name: mysql-secrets  

     apiVersion: v1
     kind: Service
     metadata:
        name: node-crud-app-service
     spec:
        selector:
          app: node-crud-app
         ports:
           - protocol: TCP
             port: 80
             targetPort: 3000
         type: LoadBalancer
  

   

   
