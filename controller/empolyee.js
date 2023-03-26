const {Information}=require("../model/empolyee")

const empolyeeEnrollment = async(req,res) => {
  const empolyeedata = req.body;

  try {
    const empolyee = new Information({
   
        firstName:empolyeedata.firstName,
        lastName:empolyeedata.lastName,
        salary:empolyeedata.salary,
        department:empolyeedata.department,
        lastCompany:empolyeedata.lastCompany,
        lastSalary:empolyeedata.lastSalary,
        overallExp:empolyeedata.overallExp,
        contactInfo:empolyeedata.empolyeedata,
        yearGrad:empolyeedata.yearGrad,
        gradStream:empolyeedata.gradStream,
        date:Date.now()


    });
   const dbResponse=await empolyee.save();
   console.log("data is saved",dbResponse)
   return res.status(200).send({message:"student data is save"}) 
}
 catch(err) {
    console.log("error in controller file");
  }
};


const empolyeeFind = async(req,res) => {
    const queryParams = req.query;
  const query={"firstName":queryParams.firstName}
    try {
const results= await Information.find(query)
     console.log(results)
         
  
  return res.status(200).send({message:"here is data"})
      }
  
  
   catch(err) {
      console.log("error in controller file");
    }
  };



  const empolyeeDelete = async(req,res) => {
    const condition = req.query;

    try {
const results= await Information.deleteOne(condition)
     console.log(results)
         
  
  return res.status(200).send({message:"here is data is deleted"})
      }
  
  
   catch(err) {
      console.log("error in controller file");
    }
    
  };

  
  const empolyeeUpdate = async(req,res) => {
    const updateData = req.body;
    const filter=updateData.filter;
    const object={$set:updateData.value}

    try {
const results= await Information.updateOne(filter,object)
     console.log(results)
     
         
  
  return res.status(200).send({message:"here is data is deleted"})
      }
  
  
   catch(err) {
      console.log("error in controller file");
    }
    
  };







  
module.exports={
    empolyeeEnrollment,empolyeeFind,empolyeeDelete,empolyeeUpdate
}