//models/User.js

import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        required: [true, "Email is required"],
        match: [/^[a-zA-Z0-9]+$/, 'Email is invalid'],
        index: true
    },
    hashed_password: {
        type: String,
        required: [true, "Password is required"]
    },
    salt: String
},{timestamps: true});

UserSchema
    .virtual('password')
    .set(function(password) {
        this._password = password
        this.salt = this.makeSalt()
        this.hashed_password = this.encryptPassword(password)
    })
    .get(function() {
        return this._password
    })

UserSchema.methods = {
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password
    },
    encryptPassword: function(password) {
        if (!password) return ''
        try {
            return crypto
                .createHmac('shal', this.salt)
                .update(password)
                .digest('hex')
        } catch (err) {
            return ''
        }
    },
    makeSalt: function() {
        return Math.round((new Date().valueOf() * Math.random())) + ''
    }
}

UserSchema.path('hashed_password').validate(function(v) {
    if (this._password && this._password.length < 6) {
        this.invalidate('password', 'Password must be at least 6 characters.')
    }
    if (this.isNew && !this._password) {
        this.invalidate('password', 'Password is required')
    }
},null)
export default mongoose.model('User', UserSchema);