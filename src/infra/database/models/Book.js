const mongoose = require("mongoose");


// OBS: Esse código serve como exemplo, vocês devem adaptar para o que vocês criaram


// TODO: Adequar o schema para a própria aplicação

const Model = new mongoose.Schema({
  uid: { type: String, unique: true },
  title: { type: String, required: [true, "Title is required"] },
  gender: { type: String, required: [true, "Gender is required"] },
  author: { type: String, required: [true, "Author is required"] },
  isbn: {
    type: String,
    validate: {
      validator: function (value) {
        return /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/.test(value);
      },
      message: (props) => `${props.value} is not a valid isbn!`,
    },
  },
  cover: { type: String, required: [true, "Cover is required"] },
  createdAt: { type: Date, default: Date.now() },
});

const Book = mongoose.model("books", Model);

module.exports = Book;
