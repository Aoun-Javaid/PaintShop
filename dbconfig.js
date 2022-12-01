
var express = require('express');
var app = express();

// app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'node',
        password: '123',
        server: 'AOUN-PC', 
        database: 'NodeTest', 

        "options": {
            "encrypt": true,
            "enableArithAbort": true
            }
    };

  
module.exports =config;
