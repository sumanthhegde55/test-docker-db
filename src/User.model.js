const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookName: {
    type: String
  },
  authorName:{
    type: String
  },
  cover:{
    type: String
  },
  id:{
    type: String
  }
});

const book = mongoose.model("books", bookSchema);

module.exports = book;