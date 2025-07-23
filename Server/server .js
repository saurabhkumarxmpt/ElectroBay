require('dotenv').config();
const express=require('express');
const cors=require('cors');
const database=require('./config/database');
const PORT=process.env.PORT;
const app=express();

app.use(express.json());
app.use(cors());
database();
app.get('/',(req,res)=>{
    res.json({message:"this is home page"});
})


app.listen(PORT,(err)=>{
    if(err){
        console.error(err.message);
    }else{
        console.info("server is run on port 5000");
    }
})