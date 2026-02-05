// mongodb://127.0.0.1:27017/

const mongoose=require('mongoose');

const mo =()=>{

    mongoose.connect("mongodb://127.0.0.1:27017/prdb")
    .then(()=>console.log("connected"))
    .catch((err)=>console.log("err",err));

}
module.exports=mo;