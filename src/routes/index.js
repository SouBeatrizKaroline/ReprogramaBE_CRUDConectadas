const express = require("express");
const router = express.Router();
const cardapioController = require("../controllers/cardapioModelController");

//TODO: Criar rotas da aplicação
router.get("/", cardapioController.getcardapioModels);

router.get("/:id", cardapioController.getcardapioModelById);

router.post("/create", cardapioController.createcardapioModel);

module.exports = router;
