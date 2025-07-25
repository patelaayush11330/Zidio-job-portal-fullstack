🧑‍💼 Zidio Job Portal - Full Stack Web Application

A complete Full Stack **Job Portal** web application built using **Spring Boot (Java)** for the backend and **React.js** for the frontend.

🚀 Developed as part of a 2-month internship project at **Zidio Development**.

📌 Features

🔹 Recruiters can:
- Post new job listings  
- View all job postings  

🔹 Job Seekers can:
- Browse available jobs  
- Apply for jobs with basic details & resume link  

🛠️ Tech Stack

| Layer        | Technology         |
|--------------|--------------------|
| Frontend     | React.js, Axios, React Router |
| Backend      | Spring Boot (Java), Spring Data JPA |
| Database     | MySQL              |
| API Testing  | Postman            |
| Build Tools  | Maven (Backend), npm (Frontend) |

📂 Project Structure

Zidio-job-portal-fullstack/
├── job-portal-frontend/     # React app
└── job-portal-backend/      # Spring Boot app

🚀 How to Run Locally

1. ✅ Clone the repository

git clone https://github.com/patelaayush11330/Zidio-job-portal-fullstack.git
cd Zidio-job-portal-fullstack

2. ⚙️ Backend Setup (Spring Boot)

* Create a MySQL database:
CREATE DATABASE job_portal;

* Update credentials in:
job-portal-backend/src/main/resources/application.properties

* Run backend:
cd job-portal-backend
mvn clean install
mvn spring-boot:run

API base URL: `http://localhost:8080`

3. 🎨 Frontend Setup (React)

cd job-portal-frontend
npm install
npm start

Frontend runs on: `http://localhost:3000`

🔗 API Endpoints

/api/jobs
* `GET`: Fetch all job postings
* `POST`: Add new job

/api/applications
* `POST`: Apply to a job


