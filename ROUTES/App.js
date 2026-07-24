import express from "express";
import userRoute from "./User.js";
import productRoute from "./Product.js"
const app = express();
const PORT = 9999;

app.use(express.json());

app.use("/Users", userRoute);
app.use("/products", productRoute);

app.listen(PORT, () => {
    console.log("App is running");
});

