const mongoose = require("mongoose");
const Schema=mongoose.Schema
const UserSchema=new Schema({
name: {
    type: String,
    require: true,
},
lastName: {
    type: String,
    require: true,
},
email: {
    type: String,
    require: true,
},
password: {
    type: String,
    require: true,
},
enseignent:{type:Boolean},
diplome: {
    type: String,
    require: true,
},
competence: {
    type: String,
    require: true,
},
experience: {
    type: String,
    require: true,
}


});





module.exports=mongoose.model("user",UserSchema);