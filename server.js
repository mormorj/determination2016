var express = require('express');
var bodyParser=require('body-parser');
var morgan=require('morgan'); // for test
var config=require('./config');
var mongoose=require('mongoose');

var app=express();

mongoose.connect(config.database,function(err){
    if(err){
        console.log(err);
    }else{
        console.log('Connected to the database');
    }
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('*',function(req,res){
    res.sendFile(__dirname + '/public/views/index.html');
});

app.listen(config.port,function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Listening on port 3001");
    }
});