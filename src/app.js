require('dotenv-safe').config()
const express = require("express");
const cors = require("cors");
const index = require("./routes/index")
const mongoose = require("./database/mongooseConnect");
const medicRoutes = require("./routes/medicRoutes");
const patientRoutes = require("./routes/patientRoutes")

const swaggerUi = require("swagger-ui-express")
const swaggerFile = require('../swagger/swagger_output.json')

const app = express();


app.use(express.json());
app.use(cors());
app.use("/", index)
app.use('/my_routes_documentation',swaggerUi.serve,swaggerUi.setup(swaggerFile));
mongoose.connect();

app.use(medicRoutes)
app.use(patientRoutes)

module.exports = app;
