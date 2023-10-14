const service = require("../services/BookService");
const mongoose = require("mongoose");

//TODO: Criar controllers da aplicação
const getBooks = async (req, res) => {
  const books = await service.getBooks();

  if (books.length === 0) {
    res.status(204).send({ message: "Sem livros cadastrados" });
  } else {
    res.status(200).send(books);
  }
};

const getBookById = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({ message: "Id é inválido, verifique a informação!" });
    return;
  }
  const book = await service.getById(id);
  if (!book) {
    res.status(404).send({ message: "Livro não foi encontrado!" });
    return;
  }
  res.send(book);
};

module.exports = {
  getBooks,
  getBookById,
};
