//Filtering in query

import Express from "express"

const app = Express();
const PORT =9999;

const products = [
 {id:1,name:"iPhone",category:"mobile"},
 {id:2,name:"MacBook",category:"laptop"},
 {id:3,name:"Samsung",category:"mobile"}
];


app.get('/products',(req,res)=>{
    const category= req.query.category;
    const FilteredProduct= products.filter(product=>product.category===category);
    res.json(FilteredProduct);
})

app.listen(PORT,()=>{
    console.log("App is running")
})