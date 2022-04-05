const express = require("express");
const app = express();
const cors = require("cors");

const productController = require("./controllers/productController");
const userController = require("./controllers/userController");

//middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//controllers

app.use("/products", productController);
app.use("/user", userController);

module.exports = app;
