const express = require("express");

const app = express();

const postRoute = require("./routes/posts.router");
app.use("/posts", postRoute);

module.exports = app

