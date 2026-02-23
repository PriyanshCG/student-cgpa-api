const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// In-memory database
const students = [
  { id: 1, name: "Aarav Sharma", branch: "CSE", semester: 8, cgpa: 9.3 },
  { id: 2, name: "Ishita Verma", branch: "IT", semester: 7, cgpa: 8.9 },
  { id: 3, name: "Rohan Kulkarni", branch: "ECE", semester: 6, cgpa: 8.4 },
  { id: 4, name: "Meera Iyer", branch: "CSE", semester: 8, cgpa: 9.1 },
  { id: 5, name: "Kunal Deshmukh", branch: "IT", semester: 5, cgpa: 7.8 },
  { id: 6, name: "Ananya Reddy", branch: "CSE", semester: 6, cgpa: 8.7 },
  { id: 7, name: "Vikram Patil", branch: "ECE", semester: 7, cgpa: 8.2 },
  { id: 8, name: "Priyanka Nair", branch: "AI", semester: 4, cgpa: 8.8 },
  { id: 9, name: "Harsh Mehta", branch: "Data Science", semester: 5, cgpa: 8.0 },
  { id: 10, name: "Neha Gupta", branch: "CSE", semester: 6, cgpa: 7.9 }
];


// ================= ROUTES =================


// 1️⃣ GET /students → All students
app.get("/students", (req, res) => {
  res.status(200).json(students);
});


// 2️⃣ GET /students/topper → Highest CGPA
app.get("/students/topper", (req, res) => {
  if (students.length === 0) {
    return res.status(404).json({ message: "No students found" });
  }

  const topper = students.reduce((max, student) =>
    student.cgpa > max.cgpa ? student : max
  );

  res.status(200).json(topper);
});


// 3️⃣ GET /students/average → Average CGPA
app.get("/students/average", (req, res) => {
  if (students.length === 0) {
    return res.status(404).json({ message: "No students found" });
  }

  const total = students.reduce((sum, s) => sum + s.cgpa, 0);
  const avg = total / students.length;

  res.status(200).json({
    averageCGPA: Number(avg.toFixed(2))
  });
});


// 4️⃣ GET /students/count → Total students
app.get("/students/count", (req, res) => {
  res.status(200).json({
    totalStudents: students.length
  });
});


// 5️⃣ GET /students/:id → Student by ID
app.get("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({
      message: "Student not found"
    });
  }

  res.status(200).json(student);
});


// 6️⃣ GET /students/branch/:branchName → Students by branch
app.get("/students/branch/:branchName", (req, res) => {
  const branch = req.params.branchName.toLowerCase();

  const result = students.filter(
    s => s.branch.toLowerCase() === branch
  );

  // Justification:
  // Returning empty array is REST-friendly instead of 404
  res.status(200).json(result);
});


// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});