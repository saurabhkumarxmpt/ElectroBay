//Load environment variables from .env file
require('dotenv').config();

//import required packages
const express=require('express');
const cors=require('cors');

//import custom modules
const database=require('./config/database'); //MongoDB connection
const category=require('./routes/categoryRoutes'); //Category Routes 
const product=require('./routes/productRoutes'); //Product Routes

//Initialize Express app
const PORT=process.env.PORT;
const app=express();

//Middleware
app.use(express.json()); //parse incoming JSON data
app.use(cors());   //Enable Cross-Origin Resource Sharing

//connect to the database
database(); 


//API Routes
app.use('/api/categories',category); // Category-related APIs
app.use('/api/products',product); //Product-related APIs


//default Route for testing
app.get('/',(req,res)=>{
    res.json({message:"this is home page"});
})

//Start the server
app.listen(PORT,(err)=>{
    if(err){
        console.error(err.message);
    }else{
        console.info("server is run on port 5000");
    }
})