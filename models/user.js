const mongoose = require('mongoose')

const userModel = mongoose.Schema({
    user_name:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
})

const User = mongoose.model("UserCollection", userModel);
module.exports = User;