const express = require("express");
const app = express();
const morgan = require('morgan');

const products = require("./routes/api/products");
const orders = require("./routes/api/orders");

app.use(morgan('dev'));

app
  .use("/products", products)
  .use("/orders", orders);

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
