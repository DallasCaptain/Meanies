//what is express?

//framework library for node
//framework - policies -**opinion** used to simplify development  #1 reason to use a framework vs a library is to avoid analysis paralysis 
//library - set of code used to simplify javascript -- reuse













//allows us to use express
var express = require('express');
//creating our express server
var app = express();
//allows us to use path
var path = require('path');
//allows us to read BODY of a form
var bodyParser = require('body-parser');
//
app.use(bodyParser.urlencoded({extended: true}));
//returns static files without us creating routes for each static file
app.use(express.static(path.join(__dirname, "./static")));
//sets up views folder - where views stored
app.set('views', path.join(__dirname, './views'));
//sets ejs as our view engine so we get cool coode in our html files
app.set('view engine', 'ejs');
//sets up a route - specifically a get to the /
app.get('/', function(req, res){
//renders index file and responds to the request
    res.render('index')
})
//sets up the users route specifically a post to the users route
app.post('/users', function(req, res) {
    //console.logs the FORM DATA
    console.log(req.body);
    //redirect the user to the / route
    res.redirect('/');
})
//sets the port for our server - starts the server
app.listen(8000, function(){
    //logs to the console so you know the CB started lets us know the listen succeeded and server is running
    console.log("Listening on port 8000");
}) 