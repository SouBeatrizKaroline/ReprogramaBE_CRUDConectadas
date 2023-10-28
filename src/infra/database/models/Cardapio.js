const mongoose = require('mongoose')

const cardapioschema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    imagem: {
        type: String,
        required: true,
    },
    preco: {
        type:String,
        required: true,
    },
    descricao: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('comidas', cardapioschema)