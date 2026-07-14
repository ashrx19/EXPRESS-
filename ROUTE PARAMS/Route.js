import express from "express";

const app = express();

const PORT = 9999;

const users = [
    { id: 1, User_name: "Ashwin" },
    { id: 2, User_name: "Kisson" },
    { id: 3, User_name: "Gokul" }
];

app.get("/", (req, res) => {
    res.send({ msg: "Root" });
});

app.get("/Users", (req, res) => {
    res.send(users);
});

app.get("/Users/:id", (req, res) => {
    // console.log(req.params.id);
    const id = parseInt(req.params.id);

    if (isNaN(id)) {
        return res.status(400).send({ msg: "Not a number" });
    }
    
    const user = users.find((user) => user.id === id);

    if (!user) {
        return res.status(404).send({ msg: "User not found" });
    }

    res.send(user);
});

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
