const cardapioModel = require('../infra/models/cardapioModel')
const userModel = require('../infra/models/userModel')

const findAllHamburguers = async (req,res)=>{
    try {
        const allHamburguers = await cardapioModel.find()
        res.status(200).json(allHamburguers)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


// ACHA UM HAMBURGUER PELO ID
const findHamburguerById = async (req,res)=>{
    try {
        const {id} = req.params
        const findById = await cardapioModel.findById(id)
        if(findById == null){
            return res.status(404).json({message: `O hamburguer de id ${id} não existe`})
        }
        res.status(200).json(findById)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

// ACHA E MOSTRA PELO NOME DO HAMBURGUER. PODE ACHAR 1 SÓ OU MAIS 
const findByName = async (req,res)=>{
    try {
        
        const nameRequested = req.params.name.toLocaleLowerCase()
        
        let names = []

        names = await cardapioModel.find({name: {'$regex': nameRequested}})

        if(names.length === 0){
            res.status(404).json(`O hamburguer ${nameRequested} não está no menu`)
        }
        else{
            res.status(200).json(names)
        }

    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

const findByUser = async (req,res)=>{
    try {
        const usernameRequested = req.params.username.toLocaleLowerCase()

        let users = []

        usernameRequested = await cardapioModel.find({username: {'$regex': usernameRequested}})

        if(users.length === 0){
            res.status(404).json(`O user ${usernameRequested} não existe ou não registrou um hamburguer`)
        }else{
            res.status(200).json(users)
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

// CRIA UM HAMBURGUER
const createHamburguer = async (req,res)=>{
    try {
        
        const {item, nome, valor, foto, descricao, userId} = req.body
        if(!userId){
            res.status(400).json({message: `O userId é necessário para fazer um pedido`})
        }

        const findUser = await userModel.findById(userId)
        
        if(!findUser){
            return res.status(404).json({message: `O usuário não foi encontrado`})
        }

        const username = findUser.username
        const newHamburguer = new cardapioModel({item, nome, valor, foto, descricao, userId})

        const saveHamburguer = await newHamburguer.save()

        res.status(201).json({message: `Um novo hamburguer foi adicionado!`, saveHamburguer})
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
}

const updateHamburguerById = async (req,res)=>{
    try {
        
        const {id} = req.params
        const {item, nome, valor, foto, descricao, username} = req.body
        const updateHamburguer = await cardapioModel.findByIdAndUpdate(id, {item,nome, valor, foto, descricao, username})
        if (updateHamburguer == null){
            return res.status(404).json({message: `O hamburguer de ID ${id} não existe`})
        } 
        res.status(200).json({message: `Hamburguer atualizado!`, updateHamburguer})

    } catch (error) {
       console.error(error)
       res.status(500).json({message: error.message}) 
    }
}


const updateHamburguerByName = async (req,res)=>{
    try {
        
        const modifiedhamburguerName = req.params.nome.toLocaleLowerCase()

        const {item, nome, valor, foto, descricao, username} = req.body

        const updateHamburguer = await cardapioModel.findOneAndUpdate({nome: {$eq:modifiedhamburguerName}},{item,nome, valor, foto, descricao, username})
        if (updateHamburguer == null){
            return res.status(404).json({message: `O hamburguer de nome ${modifiedhamburguerName} não existe`})
        } 
        res.status(200).json({message: `Hamburguer atualizado!`, updateHamburguer})

    } catch (error) {
       console.error(error)
       res.status(500).json({message: error.message}) 
    }
}

const deleteById = async (req,res)=>{
    try {
        const {id} = req.params
        const deleteHamburguer = await cardapioModel.findByIdAndDelete(id)

        if(deleteHamburguer == null){
            return res.status(404).json({message: `O hamburguer de id ${id} não foi encontrado`})
        }
        res.status(200).json({message: `Hamburguer de id ${id} foi deletado com sucesso!`})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

const deleteByUsername = async (req,res)=>{
    try {
        
        const {username} = req.params

        let deleteByUser = []

        deleteByUser = await cardapioModel.deleteMany({username: {$sin: username}})

        if(deleteByUser.deletCount === 0){
            return res.status(404).json({message: `Nenhum hamburguer foi registrado por ${username}`})
        }
        res.status(200).json({message: `Hamburgueres registrados por ${username} foram deletados!`, deleteByUser})

    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

module.exports =  {
    findAllHamburguers,
    findHamburguerById,
    createHamburguer,
    findByName,
    findByUser,
    updateHamburguerById,
    updateHamburguerByName,
    deleteById,
    deleteByUsername
}