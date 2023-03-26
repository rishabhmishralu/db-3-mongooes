const mongoose=require("mongoose")

const url="mongodb://127.0.0.1:27017/Human_resouces_3"



const  connect=async()=>{
try{
 console.log("connecting mongodb")
 const dbconn=await mongoose.connect(url)
console.log("conncted")
}
 catch(err){
    console.log("error is connection file")
 }
}


module.exports=connect;