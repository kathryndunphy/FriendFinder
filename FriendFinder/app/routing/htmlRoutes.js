// Your `htmlRoutes.js` file should include two routes:
// * A GET Route to `/survey` which should display the survey page.
// * A default, catch-all route that leads to `home.html` which displays the home page.

// app.get("/home.html", function (req, res) {
//     var survey = req.params.home;
//     res.render("survey.html");
// });

// app.get("/survey.html", function (req, res) {
//     var survey = req.params.survey;
//     res.render("survey.html");
// });

var path = require("path");

module.exports = function (app) {

    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function (req, res) {
        res, sendFile(path.join(__dirname, "../public/servey.html"));
    })

    //app.get("*", function (req, res) {
    //res.send("Whoopsie Daisy! We can't find that page, just like you can't find friends!")
});
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..public/home.html"));
});
};
