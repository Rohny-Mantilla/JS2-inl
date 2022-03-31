const router = require("express").Router();
const productModel = require("../models/products/productModel");

//Routers

router.get("/", productModel.getProducts);

// router.get("/:id");

router.post("/", productModel.createProduct);

// router.patch("/:id");

// router.delete("/:id");

module.exports = router;
