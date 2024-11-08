const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:"user"
    }
})

module.exports = mongoose.model("Blog",blogSchema)