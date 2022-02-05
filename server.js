const express = require("express");
const app = express();
const cors = require('cors');
const { PORT = 8038} = process.env;
const connectDb = require("./src/connection");
const Book = require("./src/User.model");

app.get("/books", async (req, res) => {
    const books = await Book.find({});
    console.log("books : " ,books);
    res.json(books);
  });

  app.use(cors());

  
  app.listen(PORT, function() {
    console.log(`Listening on ${PORT}`);
    connectDb().then(() => {
        console.log("MongoDb is connected");
    });
  });
  