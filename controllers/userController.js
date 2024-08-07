const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error('All field are mandatory!')
    }

    const user = await User.findOne({ email });

    //compare password and hashpasswords
    if (user && (await bcrypt.compare(password, user.password))) {
        const accesstoken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            },
        }, process.env.ACCESS_TOKEN_SECRET,
    {expiresIn : "1m"} )
        res.status(200).json({ accesstoken });
    }
    else{
        res.status(401)
        throw new Error('email or password is not valid')
    }
}

const currentUser = async (req, res) => {
    res.json({ message: 'Current User Information' })
}

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error('All fields are mandatory')
    }

    const userAvailable = await User.findOne({ email });

    if (userAvailable) {
        res.status(400);
        throw new Error('email address already exist')
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed Password is " + hashedPassword)
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    console.log(`User created ${user}`);
    if (user) {
        res.status(201).json({ _id: user.id, email: user.email })
    }
    else {
        res.status(400)
        throw new Error('User Data not valid!')
    }
}


module.exports = { loginUser, currentUser, registerUser }