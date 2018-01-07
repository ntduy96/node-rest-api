const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../../models/product');

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Handling GET request to /products'
  });
});

router.post('/', (req, res) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price
  });

  product.save()
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));

  res.status(201).json({
    message: 'Handling POST request to /products',
    productCreated: product
  });
});

router.get('/:productId', (req, res) => {
  res.status(200).json({
    message: 'Handling GET request to /products/' + req.params.productId,
    productId: req.params.productId
  });
});

router.patch('/:productId', (req, res) => {
  res.status(201).json({
    message: 'Updated product!',
    productId: req.params.productId
  });
});

router.delete('/:productId', (req, res) => {
  res.status(200).json({
    message: 'Deleted product!',
    productId: req.params.productId
  });
});

module.exports = router;
