const MedicModels = require("../models/medicModels.js");
//const jwt = require("jsonwebtoken")
//const SECRET = process.env.SECRET

const createMedic = async (req, res) => {
  try {
    const {
      name, specialty, attend_type, healt_unit, surgery, contact, email, city, state,
    } = req.body;

    const newMedic = new MedicModels({
      name, specialty, attend_type, healt_unit, surgery, contact, email, city, state,
    });

    const savedMedic = await newMedic.save();
    res.status(201).json(savedMedic);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const getAllMedic = async (req, res) => {
  try {
    const findAllMedic = await MedicModels.find();
    res.status(200).json(findAllMedic);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const findMedicById = async (req, res) => {
  try{
    const findMedic = await MedicModels.find();
    res.status(200).json(findAllMedic);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
  }


module.exports = {
  createMedic,
  getAllMedic,
  findMedicById
};
