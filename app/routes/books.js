const express = require("express");
const router = express.Router();

/* GET users listing. */
const booksCollection = [
  {
    author: "Johan",
    title: "Getting started with NodeJS"
  },
  {
    author: "Johan Berglund",
    title: "NodeJS for Johan"
  },
];
router.get("/", (req, res, next) => {
  res.json({ books: booksCollection });
});

module.exports = router;
