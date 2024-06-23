const Author = require("../../models/Author");

const createAuthor = async (req, res, next) => {
  try {
    const newAuthor = await Author.create(req.body);
    res.status(201).json(newAuthor);
  } catch (error) {
    next(error);
  }
};

const getAuthors = async (req, res, next) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createAuthor,
  getAuthors,
};
