const express=require("express")
const { adduser, getusers, deleteuser, updateuser } = require("../Controller/jobcontroller")
const jobrouter=express.Router()
jobrouter.post("/jobuser",adduser)
jobrouter.get("/allusers",getusers)
jobrouter.delete("/deleteuser/:id",deleteuser)
jobrouter.put("/update/:id",updateuser)
module.exports=jobrouter
