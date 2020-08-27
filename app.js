var express = require('express'),
app         = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public/'));

// Routes
app.get("/", function(req, res){
    res.render("home");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/projects", function(req, res){
    res.render("projects");
});

app.get("/services", function(req, res){
    res.render("services");
});


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Portfolio Server Has Started!"); 
});

// Fix Username and Email