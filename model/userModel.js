const mongoose = require ("mongoose")
const {Schema} = mongoose

const userSchema = new Schema ({
    fullName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        // unique : true ,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    randomOtp : {
        type : String
    },
    avatar :{
        type : String
    },
    emailVarified : {
        type : Boolean,
        default : false,
    },
    merchant : {
        type : String,
        default : false,
    },
    role : {
        type : String,
        default : "member",
        enum : ["admin","member","merchant"]
    },
    updated : {
        type : Date,
    },
    created : {
        type : Date,
        default : Date.now
    },
    facebookId : {
        type : String,
    },
    linkedinId : {
        type : String,
    },
})
module.exports = mongoose.model("User", userSchema)