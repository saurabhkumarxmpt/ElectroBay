const Category = require('../models/category');
const cloudinary=require('../utils/cloudinary');
const fs=require('fs');


//Add a new Category
exports.newCategory=async(req,res)=>{
    try{
        const{name,description}=req.body;
         if(!req.file){
            return res.status(400).json({message:"image file is required"});
         }

         const result=await cloudinary.uploader.upload(req.file.path,{
            folder:'category',
            public_id: name.toLowerCase().replace(/\s+/g, '-'),
            overwrite:true
         });

          fs.unlinkSync(req.file.path);

          const newCategory=new Category({
            name,
            description,
            image:result.secure_url,
          });

          await newCategory.save();

          res.json({
            message: 'Category saved successfully!',
            category: newCategory,
          })


    }catch(err){
        res.status(500).json({message:err.message});
    }
}   

//all cetegory
exports.Allcategorys=async(req,res)=>{
  try{
    const cetegorys=await Category.find();
    res.json(cetegorys);
    
  }catch(err){
    res.status(500).json({message:err.message});
  }
}


//delete a category
exports.deleteCategory=async(req,res)=>{
  try{
    const categoryId=req.params.id;

    const deleteCategory=await Category.findByIdAndDelete(categoryId);
    
    if(!deleteCategory){
      return res.status(404).json({message:'Category not found'});
    }

    return res.status(201).json({ message: 'Category deleted successfully', deletedCategory: deleteCategory });

  }catch(err){
    res.status(500).json({message:"internel server error"})
  }
}