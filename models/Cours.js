const mongoose = require("mongoose");
const schema=mongoose.Schema
const CoursSchemas=new schema({
titre: {
    type: String,
    require: true,
},
matiere : {
    type: String,
    require: true,
},
continue: {
    type: String,
    require: true,
},



});
module.exports=mongoose.model("cours",CoursSchemas);
