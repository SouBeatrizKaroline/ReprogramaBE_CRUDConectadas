const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: ()=> new mongoose.Types.ObjectId()
    },
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    age: {type: Number, required: true},
    gender: {type: String, required: true}
},
{versionKey: false},
{timestamp: true}
)

const User = mongoose.model('user', userSchema)

module.exports = User