const express = require("express")
const app = express()

const  medic = require("./routes/medicRoutes.js")

app.use(express.json)

app.use("/medical", medic)

module.exports = app
