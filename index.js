const express = require("express");
const ProductService = require("./ProductService");
const app = express();
const port = 3000;
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", async (req, res) => {
  let products = await ProductService.getProducts();
  res.json(products);
});

app.get("/products/:id", async (req, res) => {
  let id = req.params.id;
  let product = await ProductService.getProductById(id);
  if (!product || !product[0]) {
    res.status(404).send("Product not found");
  } else res.json(product);
});

app.post("/products", (req, res) => {
  let product = req.body;
  ProductService.addProduct(product);
  res.status(201).send(product);
});

app.listen(port, () => {
  console.log(`Product app listening on port ${port}`);
});
