const mongoose=require('mongoose')
const url="mongodb://127.0.0.1:27017/Ecommercedbs"
//var url = "mongodb://localhost:27017/";
mongoose.connect(url,{ useNewUrlParser: true , useUnifiedTopology: true},(err,connection)=>{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log("connection successful")
    }
});
const read=mongoose.Schema({
    item:String
})
re=mongoose.model("readme",read);
const im1=new re(
    {
        item:"Information"
    });
const im2=new re(
{
    item:"Service"
});
const im3=new re(
{
    item:"Extra"
});
const im4=new re(
    {
        item:"My Account"
    });

const im5=new re(
        {
            item:"Useful Links"
        });
const im6 =new re(
    {
        item:"Our offers"
    });
    re.insertMany([im1,im2,im3,im4,im5,im6],function(err,result){
        if(err) throw err;
        else
        console.log(result)
       });

