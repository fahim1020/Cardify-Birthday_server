//Imports
const createCard = require("../Api/createCard");
const getCard = require("../Api/getCard");
const express = require("express");
const Router = express.Router();

//Routes
Router.post("/create-card", createCard);
Router.get("/get-card/:username", getCard);
//Exports
module.exports = Router;
