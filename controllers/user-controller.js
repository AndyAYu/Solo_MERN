const User = require("../models/User");


const signup = async(req, res, next) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password
    });

    try {
        await user.save();
    } catch (err) {
        console.log(err);
    }

    return res.status(201).json({message:user})
}

exports.signup = signup;