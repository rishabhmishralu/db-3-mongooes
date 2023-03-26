const mongoose =require("mongoose")
const informationSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    salary:Number,
    department:String,
    lastCompany:String,
    lastSalary:Number,
    overallExp:Number,
    contactInfo:String,
    yearGrad:Number,
    gradStream:String,
    date:Date
});

const Information=mongoose.model("empolyee",informationSchema)
module.exports={Information}