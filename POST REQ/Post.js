import express from "express";

const app = express();
const PORT = 9999;

app.use(express.json());

const products = [
  { id: 1, name: "iPhone", category: "mobile" },
  { id: 2, name: "MacBook", category: "laptop" },
  { id: 3, name: "Samsung", category: "mobile" }
];

const users = [
  { id: 1, User_name: "Ashwin" },
  { id: 2, User_name: "Kisson" },
  { id: 3, User_name: "Item Gokul" }
];

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/Users", (req, res) => {
  res.send(users);
});

app.post("/Users", (req, res) => {
  users.push(req.body);
  res.send(users);
});

app.listen(PORT, () => {
  console.log("App is running");
});