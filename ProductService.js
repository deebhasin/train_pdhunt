const ProductDAO = require("./ProductDAO");

let products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
  { id: 4, name: "Product 4", price: 400 },
];

let getProducts = async () => {
  return await ProductDAO.getProductsFromDB();
};

let getProductById = async (id) => {
  console.log("id: " + id);
  return await ProductDAO.getProductsFromDB(id);
};

let addProduct = (product) => {
  products.push(product);
};

module.exports = { getProducts, getProductById, addProduct };
