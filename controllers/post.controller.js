const express = require("express");

function getAllPost(req,res){
    console.log("first method");
    res.send("FROM FIRST METHOD");
}

function getPostByID(req,res){
    console.log(req.params.id);
    res.send(req.params.id);

    let departmentName = req.query.department;
    console.log(departmentName);





}

function createPost(req,res){

    console.log(req.query.title);
    res.status(201).json({
       "success" : true,
        "data" : req.query,
    });
}

function updatePost(req,res){
    console.log("first method");
    res.send("FROM FIRST METHOD");
}

function deletePost(req,res){
    console.log("first method");
    res.send("FROM FIRST METHOD");
}


module.exports = {
    getAllPost : getAllPost,
    getPostByID : getPostByID,
    createPost : createPost,
    updatePost : updatePost,
    deletePost : deletePost
}