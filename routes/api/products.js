const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Handling GET request to /products'
  });
});

router.post('/', (req, res) => {
  const product = {
    name: req.body.name,
    price: req.body.price
  };

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
