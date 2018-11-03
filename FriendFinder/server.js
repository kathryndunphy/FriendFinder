//Dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

//Set up Express App
var app = express();
var PORT = process.env.PORT || 8080;

//Express app set up to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//not sure what this will do yet- if at all
require(".routing/apiRoutes")(app);
require(".routing/htmlRoutes")(app);

//this i'm hoping pulls
// app.get("/", function (req, res) {
//     var home = req.params.home;
//     res.render("home.html")
// });

// app.get("/survey.html", function (req, res) {
//     var survey = req.params.survey;
//     res.render("survey.html");
// });


app.listen(PORT, function () {
    console.log("PORT listening on:" + PORT)
});

//need to end connection...not here?