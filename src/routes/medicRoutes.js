const myControl = require("../controllers/medicControllers")
const express = require("express")

const myrouter = express.Router()
myrouter.post("/medic", myControl.createMedic)
myrouter.get("/allmedic", myControl.getAllMedic)
myrouter.get("/medic/:id", myControl.findMedicById)
myrouter.patch("/medic/:id", myControl.updateMedic)
myrouter.delete("/medic/:id", myControl.deleteMedic)


module.exports = myrouter
