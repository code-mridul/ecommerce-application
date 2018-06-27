var express = require('express');
var morgan = require('morgan');


var app = express();

//Middleware
app.use(morgan('dev'));



app.get('/', function(req,res){
    var name = "Mridul";
    res.json("my name is " + name);
});

app.get('/lastname', function(req,res){
    res.json("Chowdhury");
});

app.listen(3000, function(err) {
    if (err) throw err;
    console.log("server is running");
});