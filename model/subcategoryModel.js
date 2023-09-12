const mongoose = require("mongoose")
const { Schema} = mongoose

const  subCategorySchema = new Schema ({

    name : {
        type : String,
       
    },
    description : {
        type : String
    },
    isActive : {
        type : String,
        default : false
    },
    category :{
        type : Schema.Types.ObjectId,
        ref: "Category"
    }
    ,
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

module.exports = mongoose.model("SubCategory", subCategorySchema)