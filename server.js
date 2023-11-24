const app = require('./src/app')

const PORT = process.env.PORT || 3333

app.get('/', (req,res)=>{
    res.send({message: "Hamburgueria!"})
})

app.listen(PORT, ()=>{
    console.log(`Running on port ${PORT}`)
})