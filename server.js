const express = require("express")
const { v4: uuidv4 } = require('uuid')
const router = express.Router()
const app = express()
const porta = 3333

//POST
function criaCardapio(req, response) {
    const novoCardapio = {
        id: uuidv4(),
        item: req.body.item,
        imagem: req.body.imagem,
        descricao: req.body.descricao
    }
    
    cardapios.push(novoCardapio)

    response.json(cardapios)
}
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.post('/cardapios', criaCardapio))

app.listen(porta, mostraPorta)