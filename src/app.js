const express = require("express")
const app = express()

const cors = require("cors")

const swaggerUi = require("swagger-ui-express")
const swaggerFile = require('../swagger/swagger_output.json')
require('dotenv-safe').config()

const mongoose = require("./database/mongooseConnect")

const  medicRoutes = require("./routes/medicRoutes.js")


app.use(express.json())
app.use(cors())
app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));
mongoose.connect()

app.use(medicRoutes)


module.exports = app
