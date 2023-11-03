const menuModel = require('../infra/models/menuModel')
const userModel = require('../infra/models/userModel')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET


//MOSTRA O MENU TODO
const findAllHamburguers = async (req,res)=>{
    try {
        const allHamburguers = await menuModel.find()
        res.status(200).json(allHamburguers)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


// ACHA UM HAMBURGUER PELO ID
const findHamburguerById = async (req,res)=>{
    try {
        const {id} = req.params
        const findById = await menuModel.findById(id)
        if(findById == null){
            return res.status(404).json({message: `O hamburguer de id ${id} não existe`})
        }
        res.status(200).json(findById)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

// CRIA UM HAMBURGUER
const createHamburguer = async (req,res)=>{
    try {
        
        const {hamburguerName, typeBread, typeMeat, typeSauce, typeCheese, salad, userId} = req.body
        if(!userId){
            res.status(400).json({message: `O userId é necessário para fazer um pedido`})
        }

        const findUser = await userModel.findById(userId)
        
        if(!findUser){
            return res.status(404).json({message: `O usuário não foi encontrado`})
        }

        const username = findUser.username
        const newHamburguer = new menuModel({hamburguerName, typeBread, typeMeat, typeSauce, typeCheese, salad, userId})

        const saveHamburguer = await newHamburguer.save()

        res.status(201).json({message: `Um novo hamburguer foi adicionado!`, saveHamburguer})
    } catch (error) {
        console.error(error)
        res.status(500).json(error.message)
    }
}

// ACHA E MOSTRA PELO NOME DO HAMBURGUER. PODE ACHAR 1 SÓ OU MAIS 
const findByName = async (req,res)=>{
    try {
        
        const nameRequested = req.params.hamburguerName.toLocaleLowerCase()
        
        let names = []

        names = await menuModel.find({hamburguerName: {'$regex': nameRequested}})

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


// ACHA E MOSTRA HAMBURGUERES PELO TIPO DE PÃO
const findByBread = async (req,res)=>{
    try {
        
        const breadRequested = req.params.typeBread.toLocaleLowerCase()
        let breads = []
        breads = await menuModel.find({typeBread: {'$regex': breadRequested}})
        if(breads.length === 0){
            res.status(404).json(`O pão ${typeBread} ainda não está no menu.`)
        }else{
            res.status(200).json(breads)
        }

    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

// ACHA E MOSTRA HAMBURGUERES PELO TIPO DE CARNE
const findByMeat = async (req,res)=>{
    try {
        const meatRequested = req.params.typeMeat.toLocaleLowerCase()
        let meats = []
        meatRequested = await menuModel.find({typeMeat: {'$regex': meatRequested}})
        if(breads.length === 0){
            res.status(404).json(`A carne ${typeMeat} ainda não está no menu.`)
        }else{
            res.status(200).json(meats)
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

// ACHA E MOSTRA TODOS OS HAMBURGUERES QUE TEM O MOLHO X
const findBySauce = async (req,res)=>{
    try {
        const sauceRequested = req.params.typeSauce.toLocaleLowerCase()
        let sauces = []
        sauceRequested = await menuModel.find({typeSauce: {'$regex': sauceRequested}})
        if(sauces.length === 0){
            res.status(404).json(`A carne ${typeSauce} ainda não está no menu.`)
        }else{
            res.status(200).json(sauces)
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

//ACHA E MOSTRA OS HAMBURGUERES QUE TEM O QUEIJO X
const findByCheese = async (req,res)=>{
    try {
        const cheeseRequested = req.params.typeCheese.toLocaleLowerCase()
        let cheeses = []
        cheeseRequested = await menuModel.find({typeCheese: {'$regex': cheeseRequested}})
        if(cheeses.length === 0){
            res.status(404).json(`A carne ${typeCheese} ainda não está no menu.`)
        }else{
            res.status(200).json(cheeses)
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

//ACHA E MOSTRA OS HAMBURGUERES QUE TEM A SALADA X
const findBySalad = async (req,res)=>{
    try {
        const saladRequested = req.params.salad.toLocaleLowerCase()
        let salads = []
        saladRequested = await menuModel.find({salad: {'$regex': saladRequested}})
        if(salads.length === 0){
            res.status(404).json(`A carne ${salad} ainda não está no menu.`)
        }else{
            res.status(200).json(salads)
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

//ACHA E MOSTRA OS HAMBURGUERES QUE O USER X CADASTROU
const findByUser = async (req,res)=>{
    try {
        const usernameRequested = req.params.username.toLocaleLowerCase()
        let users = []
        usernameRequested = await menuModel.find({username: {'$regex': usernameRequested}})
        if(users.length === 0){
            res.status(404).json(`A carne ${username} ainda não está no menu.`)
        }else{
            res.status(200).json(users)
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

// Atualizar hamburguer pelo ID
const updateHamburguerById = async (req,res)=>{
    try {
        
        const {id} = req.params
        const {hamburguerName, typeBread, typeMeat, typeSauce, typeCheese, salad} = req.body

        const updateHamburguer = await menuModel.findByIdAndUpdate(id, {hamburguerName, typeBread, typeMeat, typeSauce, typeCheese, salad})
        if(updateHamburguer == null){
            return res.status(404).json({message: `O hamburguer de id ${id} não existe`})
        }
        res.status(200).json({message: `Hamburguer atualizado!`, updateHamburguer})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

// Atualizar hamburguer pelo NOME
const updateHamburguerByName = async (req,res)=>{
    try {
        
        const modifiedhamburguerName = req.params.hamburguerName.toLocaleLowerCase()

        const {hamburguerName, typeBread, typeMeat, typeSauce, typeCheese, salad} = req.body

        const updateHamburguer = await menuModel.findOneAndUpdate({hamburguerName: {$eq: modifiedhamburguerName}}, {hamburguerName, typeBread, typeMeat, typeSauce, typeCheese, salad})
        if(updateHamburguer == null){
            return res.status(404).json({message: `O hamburguer de nome ${modifiedhamburguerName} não existe`})
        }
        res.status(200).json({message: `Hamburguer atualizado!`, updateHamburguer})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

//  deleta hamburguer pelo id
const deleteById = async (req,res)=>{
    try {
        const {id} = req.params
        const deleteHamburguer = await menuModel.findByIdAndDelete(id)

        if(deleteHamburguer == null){
            return res.status(404).json({message: `O hamburguer de id ${id} não foi encontrado`})
        }
        res.status(200).json({message: `Hamburguer de id ${id} foi deletado com sucesso!`, deleteHamburguer})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}

// deleta hamburguer pelo username de quem o registrou 
const deleteByUsername = async (req,res)=>{
    try {
        const {username} = req.params
        
        let deleteByUser = []
        
        deleteByUser = await menuModel.deleteMany({username: {$in: username}})
        if(deleteByUser.deletedCount === 0){
            return res.status(404).json({message: `Nenhum hamburguer foi registrado por ${username}`})
        }
        res.status(200).json({message: `Hamburgueres registrados por ${username} foram detelatdos!`, deleteByUser})

    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }

}


module.exports = {
    findAllHamburguers,
    findHamburguerById,
    createHamburguer,
    findByName,
    findByBread,
    findByMeat,
    findBySauce,
    findByCheese,
    findBySalad,
    findByUser,
    updateHamburguerById,
    updateHamburguerByName,
    deleteById,
    deleteByUsername

}