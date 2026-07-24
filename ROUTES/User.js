import express from "express";

const router = express.Router();

const users = [
    { id: 1, name: "Ashwin", age: 20 },
    { id: 2, name: "Kisson", age: 18 }
];

router.get("/", (req, res) => {
    res.send(users);
});

router.post("/", (req, res) => {
    users.push(req.body);
    res.send(users);
});

export default router;