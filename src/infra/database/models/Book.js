const mongoose = require("mongoose");

const Model = new mongoose.Schema({
  uid: { type: String, unique: true, default: new mongoose.Types.ObjectId() },
  item: { type: String, required: [true, "O tipo de Item é Obrigatório"] },
  preco: { type: String, required: [true, "O Preço é Obrigatório"] },
  descricao: { type: String, required: [true, "A Descrição é Obrigatória"] },
  codigo: {
    type: String,
    validate: {
      validator: function (value) {
        return /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/.test(value);
      },
      message: (props) => `${props.value} não é um codigo válido!`,
    },
  },
  cover: { type: String, required: [true, "A imagem é obrigatória"] },
  createdAt: { type: Date, default: Date.now() },
});

const Cardapio = mongoose.model("cardapios", Model);

module.exports = Cardapio;