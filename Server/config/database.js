const mongoose=require('mongoose');

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI); //include the mongodb database url
        console.info("database connect"); // sucess message
    }catch(error){
        console.error(error); //error message;
    }

}

module.exports=connectDB;