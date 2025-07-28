//import the express
const mongoose=require('mongoose');

//Connect The MongoDB Database
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.info("database connect"); // sucess message
    }catch(error){
        console.error(error); //error message;
    }

}

module.exports=connectDB; //export the database