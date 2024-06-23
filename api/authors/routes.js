const express = require("express");
const { createAuthor, getAuthors } = require("./controllers");
const authorRouter = express.Router();

authorRouter.post("/", createAuthor);
authorRouter.get("/", getAuthors);

module.exports = authorRouter;
