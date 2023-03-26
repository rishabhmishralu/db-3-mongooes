const express=require("express")
const connect=require("./database/mongoes")
const empolyeerouter=require("./router/empolyee")
const app=express()


app.use(express.json());
app.use(empolyeerouter);



app.listen(3000,async()=>{
    console.log("port is working fine")
   await connect()
})