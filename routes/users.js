const mongoose=require("mongoose");
const passport = require("passport");
const plm=require("passport-local-mongoose").default;

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
        type:String
    },
    password:{
        type:String
    }
})

userSchema.plugin(plm);
module.exports=mongoose.model('user',userSchema);