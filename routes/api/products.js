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
  Product.findByIdAndUpdate(
    req.params.productId, { $set: req.body })
    .then(result => {
      if (result) {
        res.status(200).json(result);
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

router.delete('/:productId', (req, res) => {
<<<<<<< HEAD
  Product.findByIdAndRemove(req.params.productId)
=======
  Product.findByIdAndRemove({ _id: req.params.productId })
    .exec()
>>>>>>> f7c2f5423c58245249930d7e30fa47e1afabfbe0
    .then(result => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({
<<<<<<< HEAD
          message: 'Not found valid entry for provided ID'
=======
          message: 'Not found valid entry for provided ID to delete'
>>>>>>> f7c2f5423c58245249930d7e30fa47e1afabfbe0
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
