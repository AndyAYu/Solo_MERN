const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    // username: {
    //     type: String,
    //     lowercase: true,
    //     unique: true,
    //     required: [ true, "can't be blank"],
    //     match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
    //     index: true
    // },
    email: {
        type: String,
        unique: true,
        required: [true, "can't be blank"],
        index: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    
},{timestamps: true});



module.exports = mongoose.model('User', UserSchema);