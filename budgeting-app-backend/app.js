//DEPENDENCIES
const express = require("express");
const cors = require("cors");


//CONFIGURATION
const app = express();


//MIDDLEWARE
app.use(cors());
app.use(express.json());


//ROUTES

//Welome Route
app.get("/", (req, res) => {
    res.send("Welcome to Budgeting App!");
})


//EXPORT
module.exports = app;