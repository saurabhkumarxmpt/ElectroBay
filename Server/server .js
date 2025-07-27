require('dotenv').config();
const express=require('express');
const cors=require('cors');
const database=require('./config/database');
const category=require('./routes/categoryRoutes');
const uplaodRoutes=require('./routes/uploadRoutes');
const PORT=process.env.PORT;
const app=express();

app.use(express.json()); //made json formet
app.use(cors()); //add cors
database(); // include database


app.use('/api/categories',category); // add category route
app.use('/api',uplaodRoutes);

//demo route
app.get('/',(req,res)=>{
    res.json({message:"this is home page"});
})

//listen the app
app.listen(PORT,(err)=>{
    if(err){
        console.error(err.message);
    }else{
        console.info("server is run on port 5000");
    }
})