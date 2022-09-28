
const mongoose = require("mongoose");
const Schema =mongoose.Schema;
const enrollSchema =new Schema({
    name: String,
    course: String,
    mobile:Number,
    email:String,
    class:{
        type:String,
        enum:[6,7,8,9,10,'10+'],
        required:true
    }
})
module.exports =mongoose.model('Enroll',enrollSchema);
