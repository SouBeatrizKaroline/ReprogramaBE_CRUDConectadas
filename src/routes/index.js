const express = require("express");
const router = express.Router();
const bookController = require("../controllers/BookController");

//TODO: Criar rotas da aplicação
router.get("/", controller.getBooks);

router.get("/:id", controller.getBookById);

module.exports = router;
