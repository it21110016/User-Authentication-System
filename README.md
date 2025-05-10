# 🔐 User Authentication Microservice – Cloud Computing Assignment

A microservice-based authentication system developed using **Node.js**, **Docker**, **GitHub Actions**, and deployed to **AWS ECS (Fargate)** with strong **DevOps**, **DevSecOps**, and **cloud-native** practices.

---

## 🎯 Project Objective

To design and deploy a secure and scalable **User Authentication Microservice** using modern DevOps methodologies, cloud infrastructure, and container-based development, aimed at production-ready deployment with automation, monitoring, and security in mind.

---

## 🗂 Project Structure

```bash
.
├── .github/workflows/        # GitHub Actions CI/CD workflows
│   └── deploy.yml
├── auth-service/             # Main authentication microservice codebase
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── Dockerfile
├── docker-compose.yml        # Local development setup
├── architecture-diagram.png  # High-level deployment diagram
└── README.md                 # Project documentation
```

---

## 🧰 Tech Stack
| 🔹 Layer             | 🔧 Tools / Services                               |
| -------------------- | ------------------------------------------------- |
| **Backend**          | Node.js, Express.js                               |
| **Database**         | MongoDB (via Atlas or Docker)                     |
| **Containerization** | Docker, Docker Compose                            |
| **CI/CD**            | GitHub Actions                                    |
| **Cloud**            | AWS ECS (Fargate), ECR, API Gateway               |
| **Security**         | JWT, GitHub Secrets, IAM Roles, SonarCloud / Snyk |


---
## 💻 Running Locally
✅ Prerequisites
 - Node.js
 - Docker & Docker Compose
 - MongoDB (either locally or via MongoDB Atlas)
 - .env file inside the /auth-service directory

### 🚀 Steps to Run
Clone the repository:
 - git clone https://github.com/it21110016/User-Authentication-System.git
 - cd User-Authentication-System

Run the services using Docker Compose:
 - docker-compose up --build
