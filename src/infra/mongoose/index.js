const mongoose = require('mongoose');

const connection = (url, user, pass, data) => {
  mongoose.connect(`${url}/${data}` , {
    user: user,
    pass: pass,
    useNewUrlParser: true
  }).then(() => {
    console.log('Banco de dados MongoDB conectado')
  }).catch((error) => {
    console.log(`Banco não conectado, ${error}`)
  })  
}

module.exports = connection;