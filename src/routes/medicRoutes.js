const myControl = require("../controllers/medicControllers")
const express = require("express")
const myrouter = express.Router()

myrouter.get("/catalogo", myControl.getAll)

module.exports = myrouter
