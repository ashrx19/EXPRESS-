//Finding

import Express from "express"

const app = Express();

const PORT =9999;

const users = [
    { id: 1, User_name: "Ashwin" },
    { id: 2, User_name: "Kisson" },
    { id: 3, User_name: "Gokul" }
];

//checking for the name and displaying it only if it present in the users
app.get("/User1",(req,res)=>{
    const name = req.query.name;
    const user = users.find(user=>user.User_name===name);
    res.send(user)
})
// if id id same it return
app.get("/User2",(req,res)=>{
    const id = Number(req.query.id);
    const user = users.find(user=>user.id===id);
    res.send(user)
})

//check for id and user name if it is name it returns
app.get("/User3",(req,res)=>{
    const {id,name} = req.query;
    const user = users.find(user=>user.id===Number(id) && name==user.User_name)
    res.send(user)
})



app.listen(PORT,()=>{
    console.log("App is Running ")
})