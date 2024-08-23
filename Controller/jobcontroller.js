const jobs=require("../Model/schema")
exports.adduser=async(req,res)=>{
    console.log(req.body)
    try {
        const user=new jobs(req.body)
        await user.save()
        res.status(200).send({msg:"new user is successfully created",user})
    } catch (error) {
        res.status(500).send({msg:"failled",error})
    }
}
exports.getusers=async(req,res)=>{
    try {
        const users=await jobs.find()
        res.status(200).send({msg:"this is the list of all users",users})
    } catch (error) {
        res.status(500).send({msg:"failled",error})
    }
}

exports.deleteuser=async(req,res)=>{
    try {
        const user=await jobs.deleteOne({_id:req.params.id})
        res.status(200).send({msg:"user is deleted"})
    } catch (error) {
        res.status(500).send({msg:"failled",error})
    }
}

exports.updateuser=async(req,res)=>{
    try {
        const updateduser=await jobs.updateOne({_id:req.params.id},{$set:req.body})
res.status(200).send({msg:"update is completed",updateduser})
    } catch (error) {
        res.status(500).send({msg:"failled",error})
    }
}
