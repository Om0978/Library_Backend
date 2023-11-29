const { default: mongoose } = require('mongoose');


// this is a Schema
const User = new mongoose.Schema({
    Book_name:{type:String,required:true},
    Book_Code:{type:Number,required:true},
    Author_name:{type:String,required:true},
    Publisher_name:{type:String,required:true},
    Price:{type:Number},
})
module.exports = mongoose.model("Library", User);