const service = require("../services/cardapioModelService");
const mongoose = require("mongoose");

//TODO: Criar controllers da aplicação
const getcardapioModels = async (req, res) => {
  const cardapios = await service.getAll();

  if (cardapios.length === 0) {
    res.status(204).send({ message: "Sem itens cadastrados" });
  } else {
    res.status(200).send(cardapios);
  }
};

const getcardapioModelById = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({ message: "O Id é inválido, verifique a informação!" });
    return;
  }
  const cardapio = await service.getById(id);
  if (!cardapio) {
    res.status(404).send({ message: "O Item não foi encontrado!" });
    return;
  }
  res.send(cardapio);
};

const createcardapioModel = async (req, res) => {
  const data = req.body;
  try {
    const dataSubmitted = await service.createcardapioModel(data);
    res.status(200).send({
      message: "Item criado com sucesso!",
      data: dataSubmitted,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
};

module.exports = {
  getcardapioModels,
  getcardapioModelById,
  createcardapioModel,
};
