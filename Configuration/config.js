const mongoose=require("mongoose")
const connectDB=async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Hana")
        console.log("data base is connected")
    } catch (error) {
        console.log("fail: data base isn't connected")
    }
}
module.exports=connectDB
