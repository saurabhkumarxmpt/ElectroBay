const express=require('express');
const {newCategory}=require('../controllers/categoryController');
const router=express.Router();
const upload=require('../utils/multer');
router.post('/',upload.single('image'),newCategory); //Add a new Category

module.exports=router;