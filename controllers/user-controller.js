const User = require("../models/User");


const signup = async(req, res, next) => {
    const {email,password} = req.body; //destructure req.body
    let existingUser;
    try {
    existingUser = await User.find({ email: email})
    } catch (err) {
        console.log(err);
    }
    if (existingUser) {
        return res.status(400).json({message: "Email already exists"})
    }
    const user = new User({
        email, // email: email // req.body.email
        password 
    });

    try {
        await user.save();
    } catch (err) {
        console.log(err);
    }

    return res.status(201).json({message:user})
}

exports.signup = signup;