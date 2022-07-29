const PatientModels = require("../models/patientModels");

const createPatient = async (req, res) => {
  try {
    const {
      name,
      birth_date,
      address,
      city,
      state,
      contact,
      email,
      medical_plan,
      name_plan,
    } = req.body;

    const newPatient = new PatientModels({
      name,
      birth_date,
      address,
      city,
      state,
      contact,
      email,
      medical_plan,
      name_plan,
    });

    const savedPatient = await newPatient.save();
    res.status(201).json(savedPatient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const getAllPatient = async (req, res) => {
  try {
    const findAllPatient = await PatientModels.find();
    res.status(200).json(findAllPatient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const findPatientById = async (req, res) => {
  try {
    const findPatient = await PatientModels.findById(req.params.id);
    res.status(200).json(findPatient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const updatePatient = async (req, res) => {
  try {
    const { name, birth_date, address, city,state,
        contact, email, medical_plan, name_plan, } = req.body;

    const updatePatient = await PatientModels.findByIdAndUpdate(req.params.id, {
        name,
        birth_date,
        address,
        city,
        state,
        contact,
        email,
        medical_plan,
        name_plan,
    });
    res.status(200).json(updatePatient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const deletePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const delete_patient = await PatientModels.findByIdAndDelete(id);
    const message = `Patient ${id} sucess delete`;
    res.status(200).json({ message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPatient,
  getAllPatient,
  findPatientById,
  updatePatient,
  deletePatient,
};
