const express = require("express");
const { createTag, getTags } = require("./controllers");

const tagRouter = express.Router();

tagRouter.post("/", createTag);

tagRouter.get("/", getTags);

module.exports = tagRouter;
