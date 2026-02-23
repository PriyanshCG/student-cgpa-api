# 🎓 Student CGPA API

A RESTful API built using **Express.js** to manage student academic performance records using an **in-memory JSON database**.

This project demonstrates core backend concepts like routing, middleware, filtering, aggregation, and deployment.

---

# 🚀 Objective

The objective of this project is to create a REST API that:

* Uses **Express.js**
* Stores data in an **in-memory JSON array**
* Implements **GET routes only**
* Follows **REST principles**
* Returns proper **HTTP status codes**
* Includes **static and dynamic routes**
* Is deployed publicly on the internet

---

# 📦 Tech Stack

* Node.js
* Express.js
* CORS Middleware
* Render (Deployment)
* Postman (API Documentation)

---

# 📂 Project Structure

```
student-cgpa-api/
│── index.js
│── package.json
│── .gitignore
│── README.md
```

---

# 📊 Student Data Format

Each student record contains:

```json
{
  "id": 1,
  "name": "Aarav Sharma",
  "branch": "CSE",
  "semester": 8,
  "cgpa": 9.3
}
```

---

# 🔗 Live Deployment

Render Deployment Link:

👉 https://student-cgpa-api-7c4y.onrender.com

Example Endpoint:

👉 https://student-cgpa-api-7c4y.onrender.com/students

---

# 📘 API Documentation (Postman)

Public Postman Documentation:

👉 https://documenter.getpostman.com/view/50839212/2sBXcGCeP2

The documentation includes:

* All routes
* Request methods
* Sample responses
* Status codes

---

# 💻 GitHub Repository

Source Code:

👉 https://github.com/PriyanshCG/student-cgpa-api

---

# 📌 Implemented Routes

## 1️⃣ Get All Students

```
GET /students
```

Returns all student records.

Status Code: `200 OK`

---

## 2️⃣ Get Topper Student

```
GET /students/topper
```

Returns student with highest CGPA.

Status Code: `200 OK`
If no data → `404 Not Found`

---

## 3️⃣ Get Average CGPA

```
GET /students/average
```

Response:

```json
{
  "averageCGPA": 8.12
}
```

Status Code: `200 OK`

---

## 4️⃣ Get Total Student Count

```
GET /students/count
```

Response:

```json
{
  "totalStudents": 10
}
```

Status Code: `200 OK`

---

## 5️⃣ Get Student By ID (Dynamic Route)

```
GET /students/:id
```

Example:

```
GET /students/3
```

Status Codes:

* `200 OK` → Found
* `404 Not Found` → If student does not exist

---

## 6️⃣ Get Students By Branch (Dynamic Route)

```
GET /students/branch/:branchName
```

Example:

```
GET /students/branch/CSE
```

Returns array of matching students.

Note: Returns empty array if no students found (REST-friendly approach).

---

# ⚙️ Installation & Run Locally

Clone repository:

```bash
git clone https://github.com/PriyanshCG/student-cgpa-api.git
```

Navigate into folder:

```bash
cd student-cgpa-api
```

Install dependencies:

```bash
npm install
```

Run server:

```bash
npm start
```

For development (auto restart):

```bash
npm run dev
```

Server will start on:

```
http://localhost:5000
```

---

# 🧠 Key Learning Outcomes

* Express Server Setup
* Middleware Usage (CORS, JSON)
* Static & Dynamic Routing
* Filtering & Aggregation Logic
* HTTP Status Codes
* API Deployment
* API Documentation with Postman

---

# 🌐 Deployment Details

The API is deployed on **Render** using:

* Build Command: `npm install`
* Start Command: `npm start`
* Environment Port: `process.env.PORT`

---

# 👨‍💻 Author

**Priyansh Patel**

GitHub: https://github.com/PriyanshCG

---

# ✅ Submission Links

GitHub Repository:
https://github.com/PriyanshCG/student-cgpa-api

Postman Documentation:
https://documenter.getpostman.com/view/50839212/2sBXcGCeP2

Render Deployment:
https://student-cgpa-api-7c4y.onrender.com

---

# ⭐ Project Status

✅ Completed
✅ Deployed
✅ Documented
