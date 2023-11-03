const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: ()=> mongoose.Types.ObjectId()
    },
    hamburguerName: {type: String, required: true, unique: true},
    typeBread: {type: String, required: true},
    typeMeat: {type: String, required: true},
    typeSauce: {type: String, required: true},
    typeCheese: {type: String, required: true},
    salad: {type: String, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'user'},
    username: {type: String, required: true}
},
{timestamp: true}
)

const Menu = mongoose.model('Menu', menuSchema)

module.exports = Menu