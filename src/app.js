require('dotenv').config()
const express = require("express") //aqui estou iniciando o express
//const router = express.Router() //aqui estou configurando a primeira parte da rota
const cors = require('cors') // aqui estou trazendo o pacote cors que permite consumir essa api no front-end
const mongoose = require('./infra/database/bancoDeDados') //aqui estou ligando ao arquivo bancoDeDados

mongoose.connect() // estou chamando a função que conecta o banco de dados


const cardapioRoutes = require('./routes/cardapioRoutes')
//const userRoutes = require('./routes/userRoutes')

const app = express() //aqui estou iniciando o app
app.use(express.json())
app.use(cors())

app.use('/cardapio', cardapioRoutes)
//app.use('/user', userRoutes)


module.exports = app

/** 
//GET
async function mostracardapios(request, response) {
    try {
        const cardapiosVindosDoBancoDeDados = await Cardapio.find()

        response.json(cardapiosVindosDoBancoDeDados)
    }catch (erro) {
        console.log(erro)
    }
}

//POST
async function criaCardapio(request, response) {
    const novoCardapio = new Cardapio({
        item: request.body.item,
        imagem: request.body.imagem,
        descricao: request.body.descricao,
        preco: request.body.preco
    }) 

    try {
        const cardapioCriada = await novoCardapio.save()
        response.status(201).json(cardapioCriada)
    } catch (erro) {
        console.log(erro)
    }
}

//PATCH
async function corrigeCardapio(request, response) {
    try {
        const cardapioEncontrado = await Cardapio.findById(request.params.id)

        if (request.body.item) {
            cardapioEncontrado.item = request.body.item
        }
    
        if (request.body.descricao) {
            cardapioEncontrado.descricao = request.body.descricao
        }
    
        if (request.body.imagem) {
            cardapioEncontrado = request.body.imagem
        }

        if (request.body.preco) {
            cardapioEncontrado = request.body.preco
        }

        const cardapioAtualizadoNoBancoDeDados = await cardapioEncontrado.save()

        response.json(cardapioAtualizadoNoBancoDeDados)
    } catch (erro) {
        console.log(erro)
    }
}

//DELETE
async function deletaCardapio(request, response) {
    try {
        await Cardapio.findByIdAndDelete(request.params.id)
        response.json({ messagem: 'Cardapio deletada com sucesso!'})
    } catch(erro) {
        console.log(erro)
    }
}


app.use(router.get('/cardapios', mostracardapios)) //configurei rota GET /cardapios
app.use(router.post('/cardapios', criaCardapio)) //configurei rota POST /cardapios
app.use(router.patch('/cardapios/:id', corrigeCardapio)) // configurei rota PATCH /cardapios/:id
app.use(router.delete('/cardapios/:id', deletaCardapio)) // configurei rota DELETE /cardapios/:id
*/

