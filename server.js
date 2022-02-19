var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
const axios = require('axios');
var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"

MongoClient.connect(url, function(err, db) {
    if(err) {
        console.log("error")
    };
    // console.log("connected")
    var hdb = db.db("hackathon")
    hdb.collection("merch").find({}).toArray(function(err, result) {
        if (err) {
            console.log(err)
        }
        // return result
        db.close()
      });

})

