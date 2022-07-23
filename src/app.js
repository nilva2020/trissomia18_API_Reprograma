const express = require("express")
const app = express()

const  medic = require("./routes/medicRoutes.js")

const swaggerFile = require('../swagger/swagger_output.json');
app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));


app.use(express.json)

app.use("/medical", medic)

module.exports = app
