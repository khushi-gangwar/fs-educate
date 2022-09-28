
const mongoose = require("mongoose");
const Schema =mongoose.Schema;
const educateSchema =new Schema({
user:String,
    name: String,
    price:Number,
    mobile:String,
    email:String,
    description:String,
    image:String,
    rating:Number,
    class:{
        type:String,
        enum:[6,7,8,9,10,'10+'],
        required:true
    }
})
module.exports =mongoose.model('Course',educateSchema);
// const enrollSchema =new Schema({
//     name: String,
//     course: String,
//     mobile:Number,
//     email:String,
//     class:{
//         type:String,
//         enum:[6,7,8,9,10,'10+'],
//         required:true
//     }
// })
// module.exports =mongoose.model('Enroll',enrollSchema);