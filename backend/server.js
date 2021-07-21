const mongoose=require('mongoose');
const url="mongodb://127.0.0.1:27017/Ecommercedbs";
const express = require('express');
const { request } = require('http');
var mongo = require('mongodb');
//const { assert } = require('console');
let cors = require("cors");
var assert = require('assert');
const app=express();
const PORT =3001;
app.use(cors());
mongoose.connect(url,
    { useNewUrlParser: true , useUnifiedTopology: true },function(err,connection){
    if(err) console.log(err)
    else
    console.log("connection successful")
})
const Image=mongoose.Schema({
    item:String,
      category:String,
       price:Number,
       color:String,
       path:String,
       brand:String,
       best:String
})
const image=mongoose.model("Product",Image);
const Image6=mongoose.Schema({
    item:String,
})
const image6=mongoose.model("bests",Image6);
const Accessories_page2=mongoose.Schema({
    item:String
})
const acc=mongoose.model("Acc",Accessories_page2);

const Stores=mongoose.Schema({
    item:String
})
const Menus=mongoose.Schema({
    item:String
})

const menu=mongoose.model("Menu",Menus);
const store=mongoose.model("store",Stores);
app.get("/products",(request,response)=>{
   
    
    image.find((err,result)=>{
        if(err) console.log(err)
        else{
             console.log(result)
             response.json(result)
        }
    })
})
app.get("/home",(request,response)=>{
    
    menu.find((err,result)=>{
        if(err) console.log(err)
        else{
             console.log(result)
             response.json(result)
        }
    })
  })
 
  app.get("/stores",(request,response)=>{
    
    store.find((err,result)=>{
        if(err) console.log(err)
        else{
             console.log(result)
             response.json(result)
        }
    })
  })
  
  app.get("/accs",(request,response)=>{
    
    acc.find((err,result)=>{
        if(err) console.log(err)
        else{
             console.log(result)
             response.json(result)
        }
    })
  })
  
  
  app.get("/bests",(request,response)=>{
    image6.find((err,result)=>{
        if(err) console.log(err)
        else{
             console.log(result)
             response.json(result)
        }
    })
  })
  app.get("/fbest",(request,response)=>{
    image.find({best:"true"},(err,result)=>{
        if(err) console.log(err)
        else{
             console.log(result)
             response.json(result)
        }
    }).limit(8)
  })
  const Readmes=mongoose.Schema({
    item:String,
})
const readme=mongoose.model("readme",Readmes);





 app.get("/readme",(request,response)=>{

    readme.find((err,result)=>{
        if(err) console.log(err)
        else{
             console.log(result)
             response.json(result)
        }
    })
  })
app.listen(PORT,()=>{
    console.log("server is running")
})