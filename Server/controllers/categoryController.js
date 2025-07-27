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

//Update the category name and image

