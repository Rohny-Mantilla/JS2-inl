const Product = require("./productSchema");

exports.getProducts = async (req, res) => {
  try {
    const data = await Product.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      status: false,
      message: "Somthing went wrong when fetching the products",
      err,
    });
  }
};

exports.createProduct = (req, res) => {
  Product.exists({ name: req.body.name }, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (result) {
      return res.status(400).json({
        statusCode: 400,
        status: false,
        message: "A product by that name already exists, please update product instead",
      });
    }

    Product.create({
      name: req.body.name,
      desc: req.body.desc,
      price: req.body.price,
      imageUrl: req.body.imageUrl,
    })
      .then((data) => {
        res.status(201).json({
          statusCode: 201,
          status: true,
          message: "Product created successfully",
          data,
        });
      })
      .catch((err) => {
        res.status(500).json({
          statusCode: 500,
          status: false,
          message: "Failed to created",
          err,
        });
      });
  });
};
