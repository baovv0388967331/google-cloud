import express from "express";
const app = express();

app.post('/users', (req, res) => {
  console.log('GET world received a request.');

  const target = process.env.TARGET || 'World';
  res.send(`Hello ${target}!\n`);
});

app.post('/deleted-users', (req, res) => {
  console.log('POST world received a request.');

  const target = process.env.TARGET || 'World';
  res.send(`Hello ${target}!\n`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});
