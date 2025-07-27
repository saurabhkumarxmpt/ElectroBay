const express=require('express');
const {newCategory}=require('../controllers/categoryController');
const router=express.Router();

router.post('/',newCategory); //Add a new Category

module.exports=router;