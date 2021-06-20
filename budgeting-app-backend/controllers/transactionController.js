//DEPENDENCIES
const express = require("express");
const transactionsArray = require("../models/transactions.js");


//CONFIGURATION
const transactionsRoute = express.Router();



//ROUTE

//Index Route

transactionsRoute.get("/", (req, res) => {
    res.json(transactionsArray);
})


//Create Route
transactionsRoute.post("/", (req, res) => {
    transactionsArray.push(req.body)
    res.status(200).redirect("/transactions");
})

//Show Route
transactionsRoute.get("/:index", (req, res) => {
    if(transactionsArray[req.params.index]){
        res.status(200).json(transactionsArray[req.params.index]);
    }else{
        res.redirect("/404");
    }
})


//Delete Route
transactionsRoute.delete("/:index", (req, res) => {
    if(transactionsArray[req.params.index]){
        const deletedTransaction = transactionsArray.splice(req.params.index, 1);
        res.status(200).json(deletedTransaction);
    }else{
        res.redirect("/404");
    }
})


//Update Route
transactionsRoute.put("/:index", (req, res) => {
    if(transactionsArray[req.params.index]){
        transactionsArray[req.params.index] = req.body;
        res.status(200).json(transactionsArray[req.params.index]);
    }else{
        res.redirect("/404");
    }
})

//EXPORT
module.exports = transactionsRoute;


