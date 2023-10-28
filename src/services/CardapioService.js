const model = require("../infra/database/models/cardapioModel");

//TODO: Criar service da aplicação
const getAll = async () => {
  return await model.find();
};

const getById = async (id) => {
  return await model.findById(id);
};

const createcardapioModel = async (cardapio) => {
  return await model.create(cardapio);
};

module.exports = {
  getAll,
  getById,
  createcardapioModel,
};
