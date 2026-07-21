import express from "express";

const app = express()
const PORT =9999;

app.use(express.json());

const user = [
    {id:1, name:"Ashwin", age:18},
    {id:2, name:"Gokul", age:19},
    {id:3, name:"Kison", age:18},

]

const products = [
  { id: 1, name: "iPhone", category: "mobile" },
  { id: 2, name: "MacBook", category: "laptop" },
  { id: 3, name: "Samsung", category: "mobile" }
];

app.patch("/products/:id",(req,res)=>{
    const id= Number(req.params.id);
    const productIndex = products.findIndex((productIndex)=>productIndex.id===id);
    
    if (productIndex === -1) {
        return res.status(404).json({ message: "productIndex not found" });
    }

    const {body}=req;
    products[productIndex]={...products[productIndex],...req.body}

    res.status(200).json({
    message: "productIndex updated successfully",
    products: products,
    });

});

app.listen(PORT,()=>{
    console.log("App is running")
})