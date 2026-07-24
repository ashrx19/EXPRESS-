import express from "express"

const router = express.Router()

const products = [
  { id: 1, name: "iPhone", category: "mobile" },
  { id: 2, name: "MacBook", category: "laptop" },
  { id: 3, name: "Samsung", category: "mobile" }
];

router.get("/",(req,res)=>{
    res.json(products)
})

export default router;