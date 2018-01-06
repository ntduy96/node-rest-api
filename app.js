const express = require("express");
const app = express();
const morgan = require('morgan');

const products = require("./routes/api/products");
const orders = require("./routes/api/orders");

app.use(morgan('dev'));

app
  .use("/products", products)
  .use("/orders", orders);

module.exports = app;
