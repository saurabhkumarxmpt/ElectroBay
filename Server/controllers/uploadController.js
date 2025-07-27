const cloudinary=require('../utils/cloudinary');
const fs=require('fs');

const uploadImage=async(req,res)=>{
    try{
        const filePath = req.file.path;
        const imageName = req.body.name || 'default-name';
        const folderName = req.body.folder || 'others';

        const result=await cloudinary.uploader.upload(filePath,{
            folder: folderName,        
            public_id: imageName,      
            overwrite: true,
        });

        fs.unlinkSync(filePath);

        res.json({
            message: 'Image uploaded successfully!',
            url: result.secure_url,
            public_id: result.public_id,
        });
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}

module.exports = { uploadImage };