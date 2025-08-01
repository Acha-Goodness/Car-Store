const express = require("express");
const { handleImageUpload, addProduct, editProduct, deleteProduct, fetchProducts } = require("../../Controllers/Admin/product-controller");
const { upload } = require("../../Helpers/cloudinary");

const router = express.Router();

router.post("/upload-image", upload.single("my_file"), handleImageUpload);
router.post("/add", addProduct);
router.put("/edit/:id", editProduct);
router.delete("/delete/:id", deleteProduct);
router.get("/get", fetchProducts);

module.exports = router;