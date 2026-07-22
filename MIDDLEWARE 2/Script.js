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

//MIDDLEWARE
const getProductIndexbyId = (req,res,next)=>{
  const id = Number(req.params.id);
  if(isNaN(id)){
    return res.status(400).send({msg:"Bad Request"})
  }
  
  const productIndex = products.findIndex((productIndex)=>productIndex.id===id);

  if (productIndex === -1) {
        return res.status(404).json({ message: "productIndex not found" });
    }

   req.productIndex = productIndex;
  next();
}

//PATCH
app.patch("/products/:id",getProductIndexbyId,(req,res)=>{
    
    const productIndex= req.productIndex;

    const {body}=req;
    products[productIndex]={...products[productIndex],...req.body}

    res.status(200).json({
    message: "productIndex updated successfully",
    products: products,
    });

});

//DEL
app.delete("/products/:id",getProductIndexbyId,(req,res)=>{
    const productIndex= req.productIndex;
    products.splice(productIndex, 1);

    res.status(200).json({
    message: "productIndex updated successfully",
    products: products,
    });

})

//PUT
app.put("/products/:id", getProductIndexbyId, (req, res) => {
  const productIndex = req.productIndex;

  products[productIndex] = {
    id: products[productIndex].id,
    name: req.body.name,
    category: req.body.category,
  };

  res.json({
    message: "Product replaced successfully",
    product: products[productIndex],
  });
});

app.listen(PORT,()=>{
    console.log("App is running")
})