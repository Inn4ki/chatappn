var MongoClient = require("mongodb").MongoClient;
var ObjectID = require("mongodb").ObjectID;

var url = "mongodb://localhost:27017/chat";
var connect = MongoClient.connect(url);

module.exports = {
    connect
};