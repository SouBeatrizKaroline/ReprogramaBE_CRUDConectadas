const mongoose = require('mongoose')

const cardapioschema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: ()=> mongoose.Types.ObjectId()
    },
    item: {type: String, required: true, unique: true},
    nome: {type: String, required: true, unique: true},
    valor: {type:String, required: true},
    foto: {type: String, required: true},
    descricao: {type: String, required: true},
    username: {type: String, required: true}
},
{versionKey: false},
{timeStamp: true})

const Cardapio = mongoose.model('cardapio', cardapioschema)
module.exports = Cardapio