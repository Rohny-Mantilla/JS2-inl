const router = require("express").Router();
const productModel = require("../models/products/productModel");

//Routers

router.get("/", productModel.getProducts);

router.get("/:id", productModel.getProductById);

router.post("/", productModel.createProduct);

router.patch("/:id", productModel.updateProduct);
router.put("/:id", productModel.updateProduct);

router.delete("/:id", productModel.deleteProduct);

module.exports = router;
