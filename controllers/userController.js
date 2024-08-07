const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginUser = async (req , res) => {
    const {email , password } = req.body; 
    if(!email || !password){
        res.status(400);
        throw new Error('All field are mandatory!')
    }
    res.json({message : 'login User'})
}

const currentUser =  async (req , res) => {
    res.json({message : 'Current User Information'})
}

const registerUser = async (req , res) => {
    const {username , email , password } = req.body;
    if(!username || !email || !password ){
        res.status(400);
        throw new Error('All fields are mandatory')
    }

    const userAvailable = await User.findOne({email});

    if(userAvailable){
        res.status(400);
        throw new Error ('email address already exist')
    }

    const hashedPassword = await bcrypt.hash(password , 10);
    console.log("Hashed Password is " + hashedPassword)
    const user = await User.create({
        username ,
        email , 
        password: hashedPassword,
    });

    console.log(`User created ${user}`);
    if (user){
        res.status(201).json({_id : user.id , email : user.email} )
    }
    else{
        res.status(400)
        throw new Error('User Data not valid!')
    }
}


module.exports = {loginUser , currentUser , registerUser}