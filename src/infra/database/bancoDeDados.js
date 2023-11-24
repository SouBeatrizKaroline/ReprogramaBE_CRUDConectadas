const mongoose = require('mongoose')

const MONGO_URL = process.env.MONGO_URL

const conectaBancoDeDados = async ()=> {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        
        console.log('Conexão com o banco de dados feita com sucesso!')
    } catch(erro) {
        console.log(erro)
    }
}

module.exports = {conectaBancoDeDados}