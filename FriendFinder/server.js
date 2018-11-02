//Dependencies
var express = require("express");
var path = require("path");

//Set up Express App
var app = express();
var PORT = process.env.PORT || 8080;

//Express app set up to handle data parsing
app.use(express.urlencoded({ extended:true }));
app.use(express.json());


require("./routes/apiRoutes")(app);

app.get("/", function (req, res) {
    var home = req.params.home;
    res.render("home.html")
});

app.get("/survey.html", function(req, res){
    var survey = req.params.survey;
    res.render("survey.html");
});











app.get("*", function(req, res){
    res.send("Whoopsie Daisy! We can't find that page, just like you can't find friends!")
});


app.listen(PORT, function(){
    console.log("PORT listening on:" + PORT)
});