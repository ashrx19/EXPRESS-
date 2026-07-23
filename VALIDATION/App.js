import express from "express";
import { createUserValidationSchema } from "./ValidationSchema.js";
import {
  validationResult,
  matchedData,
  checkSchema
} from "express-validator";

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

app.post("/Users", checkSchema(createUserValidationSchema),(req, res) => {
    const result = validationResult(req);
    if(result.isEmpty()){
        users.push(matchedData(req));
        console.log(result.isEmpty())
    }else{
        res.status(400);
        console.log(result.array())
    }
    
//   console.log(req['express-validator#contexts'])
  res.send(users);
});


app.listen(PORT,()=>{
    console.log("App is Running")
})  
