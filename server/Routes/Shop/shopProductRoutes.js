const express = require("express");
const { getFilterProducts } = require("../../Controllers/shop/shoppingProductController");

const router = express.Router();

router.get("/get", getFilterProducts);

module.exports = router;