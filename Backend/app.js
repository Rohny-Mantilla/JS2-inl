const express = require("express");
const app = express();
const cors = require("cors");

const productController = require("./controllers/productController");

//middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//controllers

app.use("/products", productController);

module.exports = app;
