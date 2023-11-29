const mongoose = require ('mongoose')
const User = require("../model/userModel");

exports.findByBook_Code = async (Book_Code) =>{
    return await User.findOne({'Book_Code':Book_Code}).select('_id').lean()
}

exports.createUser = async (data) =>{
    return await User.create(data)
}