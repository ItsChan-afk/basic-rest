const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    username : {
        type : String,
        required : [true , 'Name is necesary']
    },
    email : {
        type : String,
        required : [true , 'Name is necessary'],
        unique : [true , "email address already taken"]
    },
    password : {
        type : String,
        required : [true , 'Password is necesary']
    },
},
    {
    timeStamps : true 
    }
)

module.exports = mongoose.model('User' , UserSchema)