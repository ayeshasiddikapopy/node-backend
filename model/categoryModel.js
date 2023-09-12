const mongoose = require("mongoose")
const { Schema} = mongoose

const  categorySchema = new Schema ({

    name : {
        type : String,
       
    },
    description : {
        type : String
    },
    subCategory : [
        {
            type : Schema.Types.ObjectId,
            ref: "SubCategory"
        }
    ],
    isActive : {
        type : String,
        default : false
    },
    status : {
        type : String,
        default : "waiting",
        enum: ["waiting", "approved" , "rejected"]
    },
    updated : {
        type : Date
    },
    created : {
        type : Date,
        default : Date.now
    },
})

module.exports = mongoose.model("Category", categorySchema)