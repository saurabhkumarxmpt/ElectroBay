const express=require('express');
const {newCategory,Allcategorys,deleteCategory}=require('../controllers/categoryController'); //import All controller for the action of the category
const router=express.Router();
const upload=require('../utils/multer'); //import multer for the save images

router.post('/',upload.single('image'),newCategory); //Add a new Category
router.get('/findAll',Allcategorys); // See All Category
router.delete('/:id',deleteCategory); // Delete a Category


module.exports=router; //export the routes