//DEPENDENCIES
const express = require("express");
const cors = require("cors");


//CONFIGURATION
const app = express();
const transactionControllers = require("./controllers/transactionController.js");

//MIDDLEWARE
app.use(cors());
app.use(express.json());


//ROUTES

//Welome Route
app.get("/", (req, res) => {
    res.send("Welcome to Budgeting App!");
})

//Route to Controller
app.use("/transactions", transactionControllers);


//Page not Found Route
app.get("*", (req, res) => {
    res.status(400).send("Page Not Found!");
});

//EXPORT
module.exports = app;