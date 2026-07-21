import express from "express";

const app = express();
const PORT = 9999;

app.use(express.json()); // To read JSON data from the request body

const products = [
  { id: 1, name: "iPhone", category: "mobile" },
  { id: 2, name: "MacBook", category: "laptop" },
  { id: 3, name: "Samsung", category: "mobile" }
];

// Update product by ID
app.put("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const product = products.find(p => p.id === id);app

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  // Update the product
  product.name = req.body.name;
  product.category = req.body.category;

  res.json({
    message: "Product updated successfully",
    product
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});