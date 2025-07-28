const express=require("express");
const router=express.Router();
const upload=require('../utils/multer');
const{createProduct}=require('../controllers/productController');

router.post('/', upload.array('images',5),createProduct);

module.exports=router;