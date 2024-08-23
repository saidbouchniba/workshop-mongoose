const mongoose=require("mongoose")
const jobschema=new mongoose.Schema({
    name:{type:String,required:true},
    email:String,
    Birthday:Date,
    Photo:{type:String,default:"https://winaero.com/blog/wp-content/uploads/2017/12/User-icon-256-blue.png"},
    Phone:Number,
    Academic_skills:Array,
    professional_skills:Array,
    Soft_skills:Array,
    Hobbies:String,
})
module.exports=mongoose.model("jobs",jobschema)