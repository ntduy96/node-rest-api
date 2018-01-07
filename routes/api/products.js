const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../../models/product');

router.get('/', (req, res) => {
  Product.find()
    .then(products => {
      res.status(200).json(products);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
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
      res.status(201).json({
        message: 'Handling POST request to /products',
        productCreated: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });

  
});

router.get('/:productId', (req, res) => {
  Product.findById(req.params.productId)
    .then(product => {
      if (product) {
        res.status(200).json(product);
      } else {
        res.status(404).json({
          message: 'Not found valid entry for provided ID'
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.patch('/:productId', (req, res) => {
  res.status(201).json({
    message: 'Updated product!',
    productId: req.params.productId
  });
});

router.delete('/:productId', (req, res) => {
  Product.findByIdAndRemove({ _id: req.params.productId })
    .exec()
    .then(result => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({
          message: 'Not found valid entry for provided ID to delete'
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
