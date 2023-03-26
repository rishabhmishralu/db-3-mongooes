
const express=require("express")
const empolyeeControllers=require("../controller/empolyee")
const router=express.Router();


router.post("/empolyee",empolyeeControllers.empolyeeEnrollment)
router.get("/empolyee",empolyeeControllers.empolyeeFind)
router.delete("/empolyee",empolyeeControllers.empolyeeDelete)
router.put("/empolyee",empolyeeControllers.empolyeeUpdate)


module.exports=router