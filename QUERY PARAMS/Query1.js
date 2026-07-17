import express from "express";

const app = express();

const PORT = 9999;

const users = [
    { id: 1, User_name: "Ashwin" },
    { id: 2, User_name: "Kisson" },
    { id: 3, User_name: "Gokul" }
];


//Type-1 Access Individual Values
app.get("/Users", (req, res) => {
   
    const name = req.query.name;
    const id = req.query.id;

    res.send(`Access Individual Values ID : ${id}, Name : ${name}`);
});

//Type-2 Destructuring values
app.get("/User",(req,res)=>{
    const {id,name}=req.query;
    res.send(`Destructuring ID : ${id}, Name : ${name}`)
})


app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
