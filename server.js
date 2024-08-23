const express= require("express")
const connectDB=require("./Configuration/config")
const jobrouter = require("./Router/jobrouter")
const app=express()
const port=5001
connectDB()
app.use(express.json())
app.use("/api",jobrouter)
app.listen(port,()=>{
    console.log("server is runing");
})