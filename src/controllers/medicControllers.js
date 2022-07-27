const MedicModels = require("../models/medicModels.js");
//const jwt = require("jsonwebtoken")
//const SECRET = process.env.SECRET

const createMedic = async (req, res) => {
  try {
    const {
      name,
      specialty,
      attend_type,
      healt_unit,
      surgery,
      contact,
      email,
      city,
      state,
    } = req.body;

    const newMedic = new MedicModels({
      name,
      specialty,
      attend_type,
      healt_unit,
      surgery,
      contact,
      email,
      city,
      state,
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
  try {
    const findMedic = await MedicModels.findById(req.params.id);
    res.status(200).json(findMedic);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const updateMedic = async (req, res) => {
  try {
    const { name, specialty, attend_type, healt_unit } = req.body;
    const updateMedic = await MedicModels.findByIdAndUpdate(req.params.id, {
      name,
      specialty,
      attend_type,
      healt_unit,
    });
    res.status(200).json(updateMedic);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const deleteMedic = async (req, res) => {
  try {
    const { id } = req.params;
    const delete_medic = await MedicModels.findByIdAndDelete(id);
    const message = `Medic ${id} sucess delete`;
    res.status(200).json({ message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createMedic,
  getAllMedic,
  findMedicById,
  updateMedic,
  deleteMedic,
};
