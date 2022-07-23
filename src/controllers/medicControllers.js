const medicJson = require("../models/medicModels.js");
const express = require("express");
const app = express();

app.use(express.json());

const getAll = (req, res) => {
  response.status(200).json([
    {
      medic: medicJson,
    },
  ]);
};

module.exports = {
  getAll,
};
