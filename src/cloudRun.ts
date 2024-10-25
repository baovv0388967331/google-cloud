// import * as functions from "@google-cloud/functions-framework";

// // Hàm xử lý GET
// functions.http("getUser", (req, res) => {
//   const userId = req.query.id; // Lấy id từ query parameters
//   console.log(`GET request for user ID: ${userId}`);
  
//   // Giả lập dữ liệu người dùng
//   const user = { id: userId, name: "John Doe" };
  
//   res.status(200).json(user);
// });

// // Hàm xử lý POST
// functions.http("createUser", (req, res) => {
//   const { name } = req.body; // Lấy tên từ body của yêu cầu
//   console.log(`POST request to create user: ${name}`);
  
//   // Giả lập việc lưu người dùng
//   const newUser = { id: Date.now(), name: name };
  
//   res.status(201).json(newUser);
// });

// // Hàm xử lý DELETE
// functions.http("deleteUser", (req, res) => {
//   const userId = req.query.id; // Lấy id từ query parameters
//   console.log(`DELETE request for user ID: ${userId}`);
  
//   // Giả lập việc xóa người dùng
//   res.status(204).send(); // Trả về mã trạng thái 204 No Content
// });

import express from "express";
const app = express();

app.get('/users', (req, res) => {
  console.log('GET world received a request.');

  const target = process.env.TARGET || 'World';
  res.send(`Hello ${target}!\n`);
});

app.post('/users', (req, res) => {
  console.log('POST world received a request.');

  const target = process.env.TARGET || 'World';
  res.send(`Hello ${target}!\n`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});
