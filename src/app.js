const express = require("express");
const app = express();
const mongoose = require("./database/mongooseConnect");
const medicRoutes = require("./routes/medicRoutes");

const cors = require("cors");

app.use(express.json());
app.use(cors());
mongoose.connect();

app.use(medicRoutes)

module.exports = app;
