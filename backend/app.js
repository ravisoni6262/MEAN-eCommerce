const express = require('express');
const connectDB = require('./db/connection');
const app = express();
connectDB();

app.use((req, res, next) => {
  res.send("First Response");
  next();
});

module.exports = app;
