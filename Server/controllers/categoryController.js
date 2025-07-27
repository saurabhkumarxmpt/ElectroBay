const Category = require('../models/category');


//Add a new Category
exports.newCategory=async(req,res)=>{
    try{
        const categorydata=req.body;
        const newCategory=new Category(categorydata);
        await newCategory.save();
        res.json({message:'category saved'});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}   

//Update the category name and image

