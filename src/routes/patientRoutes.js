const express = require('express')
const controller = require('../controllers/patientControllers')

const router = express.Router()

router.post("/patient", controller.createPatient)
router.get("/allpatient", controller.getAllPatient)
router.get("/patient/:id", controller.findPatientById)
router.patch("/patient/:id", controller.updatePatient)
router.delete("/patient/:id", controller.deletePatient)

module.exports = router 