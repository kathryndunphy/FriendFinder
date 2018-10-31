//Dependencies
var express = require("express");
var path = require("path");

//Set up Express App
var app = express();
var PORT = 8080;

//Express app set up to handle data parsing
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
