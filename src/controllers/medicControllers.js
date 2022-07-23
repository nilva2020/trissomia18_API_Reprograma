const medicModels = require("../models/medicModels.js");
const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET




const getAllMedic = async (req, res) => {
  try {
    const findMedic = await medicModels.find({}, null, { sort: "date"})
    res.status(200).json(findMedic)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message})
  }
} 



module.exports = {
  getAllMedic,
  
 }
