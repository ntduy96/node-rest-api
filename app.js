const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'It works!' });
});

module.exports = app;
