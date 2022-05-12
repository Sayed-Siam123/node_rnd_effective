const express = require("express");

function firstMethod(req,res){
    console.log("first method");
    res.send("FROM FIRST METHOD");
}

module.exports = {
    firstMethod : firstMethod
}