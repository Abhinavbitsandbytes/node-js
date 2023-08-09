const mongoose = require('mongoose');
const validator = require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {  // task-manager-api - database name
    // useNewUrlParser: true, //depricated
    // useCreateIndex: true  // depricated
})

// const User = mongoose.model('User', {     // takes 2 arguments. 1- String name for the model and 2- definition where we define all of the fields we want.
//     name: {
// type: String,
// required: true,
// trim: true
//     },
//     email: {
//         type: String,
//         default: 0,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error("Email is invalid")
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         minLength: 7,
//         trim: true,
//         valudate(value){
//             if(value.toLowerCase().includes('password')){
//                 throw new Error("Password cannot contain 'password'")
//             }
//         }
//     },
//     age: {
// type: Number,
// validate(value){
//     if(value<0){
//         throw new Error("Age must be a positive number");
//     }
// }
//     }
// })
// // we have created model. Now we will create instances of that model to actually add documents to the database.

// const me = new User({
//     name: "   Andrew   ",
//     email: "MYEMAIL@MEAD.IO   ",
//     password: 'phone098!'
// })

// // now we created the instance. We need to save it to database.

const Task = mongoose.model('Task', {     // takes 2 arguments. 1- String name for the model and 2- definition where we define all of the fields we want.
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})
// we have created a model. Now we will create instances of that model to actually add documents to the database.


const task = new Task({
    description: "Eat lunch",
    // completed: false
})




task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})