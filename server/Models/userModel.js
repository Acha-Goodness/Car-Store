const mongoose = require("mongoose");
const validator = require("validator");


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please enter your name"]
    },
    email:{
        type: String,
        required: [true, "Please provide your email"],
        unique: true,
        lowerCase: true,
        validate: [validator.isEmail, "Please provide a valid email"]
    },
    role:{
        type: String,
        default: "user"
    },
    password:{
        type: String,
        required: [true, "Please provide a password"],
        minlength: 8,
        select: false
    },
    passwordConfirm:{
        type: String,
        required: [true, "Please confirm your password"],
        validate: {
            // THIS ONLY WORKS ON CREATE AND SAVE
            validator: function(el){
                return el === this.password
            },
            message: "password are not the same!"
        }
    },
    active:{
        type: Boolean,
        default: false,
        select: false
    },
    passwordChangedAt: Date,
    otpToken: String,
    otpExpires: Date,
})

const User = mongoose.model("User", userSchema);
module.exports = User;