const express = require("express");
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const products = require("./routes/api/products");
const orders = require("./routes/api/orders");

app
  .use(morgan('dev'))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json());

/**
 * Open connection to Mongo Atlas database
 */
require('./db');

/**
 * Handling Cross-Origin Resource Sharing (CORS) error
 */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Header',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (res.method === 'OPTIONS') {
    res.header(
      'Access-Control-Allow-Method',
      'GET, POST, PUT, PATCH, DELETE'
    );
    return res.status(200).json({});
  }
  next();
});

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
