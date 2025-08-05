const express=require("express");
const router=express.Router();
const upload=require('../utils/multer');
const{createProduct,fetchAllProducts}=require('../controllers/productController');

router.post('/', upload.array('images',5),createProduct); //create the new product
router.get('/allProducts',fetchAllProducts);
module.exports=router;