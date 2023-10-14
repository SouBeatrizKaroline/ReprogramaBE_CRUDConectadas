const model = require("../infra/database/models/Book");

//TODO: Criar service da aplicação
const getAll = async () => {
  return await model.find();
};

const getById = async (id) => {
  return await model.findById(id);
};

module.exports = {
  getAll,
  getById,
};
