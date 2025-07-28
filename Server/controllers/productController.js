const Product=require("../models/productModel");
const cloudinary=require('../utils/cloudinary');
const fs=require('fs');
const path = require('path');


exports.createProduct=async(req,res)=>{
    try{

        console.log("FILES RECEIVED:", req.files);
        const{
            name,
            brand,
            price,
            discount,
            description,
            stock,
            category,
            tags,
            isFeatured
        }=req.body;

        if(!req.files || req.files.length === 0){
            return res.status(400).json({message:"Al least one image upload"});
        }

        const imageUrls=[];

        for(const file of req.files){
            const filePath= path.join(__dirname,"..",file.path)
            const result=await cloudinary.uploader.upload(filePath,{
                folder:'products'
            });
            console.log("Uploaded:", result.secure_url);
            imageUrls.push(result.secure_url);
            fs.unlinkSync(filePath);
        }

        const product= new Product({
            name,
            brand,
            price,
            discount,
            description,
            images:imageUrls,
            stock,
            category,
            tags: tags ? tags.split(',') : [],
            isFeatured
        });

        await product.save();

        res.status(201).json({message:"producted created sucess", product});

    }catch(err){
        res.status(500).json({message:"something went wrong", error:err.message});
    }
}