const mongoose = require('mongoose');
const validator = require('validator')

const User = mongoose.model('User', {     // takes 2 arguments. 1- String name for the model and 2- definition where we define all of the fields we want.
    name: {
type: String,
required: true,
trim: true
    },
    email: {
        type: String,
        default: 0,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid")
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 7,
        trim: true,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error("Password cannot contain 'password'")
            }
        }
    },
    age: {
type: Number,
validate(value){
    if(value<0){
        throw new Error("Age must be a positive number");
    }
}
    }
})

module.exports = User