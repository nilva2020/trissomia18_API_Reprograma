const medicJson = require("../models/medicModels.js");
const express = require("express");
const app = express();

app.use(express.json());

const getAllMedic = (req, res) => {
  response.status(200).json([
    {
      medic: medicJson,
    },
  ]);
};

const updateMedic = (req, res) => {
  const idRequest = request.params.id
  const novoMedic = request.body.atendimento
}

module.exports = {
  getAllMedic,
  updateMedic
};
