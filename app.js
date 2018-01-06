const express = require("express");
const app = express();

const products = require("./routes/api/products");
const orders = require("./routes/api/orders");

app
  .use("/products", products)
  .use("/orders", orders);

module.exports = app;
