const mongoose = require("mongoose")


const studentSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        },
        email :{
            type : String,
            required:true,
            unique : true
        },
        age :{
            type : Number,
            min : 18
        },
        speciality :{
            type : String,
            required : true
        }
        
    }
)

module.exports=mongoose.model("Student",studentSchema)