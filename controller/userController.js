const User = require("../model/user")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const user = require("../model/user")

exports.getUser = async (req,res) => {
    try {
        const data = await User.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.postUser = async (req,res) => {
    try {
        const userExists = await User.findOne({email:req.body.email})
        if(userExists) return res.status(500).json({errors:true,message:"User already exits"})
            
            req.body.password = bcrypt.hash(req.body.password,10)

            const data = await User.create(req.body)
            return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.putUser = async (req,res) => {
    try {
        const data = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.deleteUser = async (req,res) => {
    try {
        const data = await User.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.login = async (req,res ) => {
    try {
        const userExists = await User.findOne({email:req.body.emial})
        if(!userExists) return res.status(500).json({errors:true,message:"email or password is invalid"})
            const passwordVerify = await bcrypt.compare(req.body.password,userExists.password)

        if(!passwordVerify) return res.status(500).json({errors:true,message:"email or password is invalid"})
            const token = await jwt.sign({id:userExists._id},process.env.SEC)
            return res.json({errros:false,data:{token:token,user:userExists}})
        
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}