
 var express = require("express");
 
 //use the application off of express.
 var app = express();
 
 //define the route for "/"
 app.get("/", function (request, response){
     //show this file when the "/" is requested
     response.sendFile(__dirname+"/src/index.html");
 });
 app.get("/signup", function (request, response){
     //show this file when the "/" is requested
     response.sendFile(__dirname+"/src/signup.html");
 });
 app.get("/flights", function (request, response){
     //show this file when the "/" is requested
     response.sendFile(__dirname+"/src/flights.html");
 });
 app.get("/profile", function (request, response){
     //show this file when the "/" is requested
     response.sendFile(__dirname+"/src/profile.html");
 });
 app.get("/warn", function (request, response){
     //show this file when the "/" is requested
     response.sendFile(__dirname+"/src/warn.html");
 });
 app.get("/tours", function (request, response){
     //show this file when the "/" is requested
     response.sendFile(__dirname+"/src/tours.html");
 });
 app.get("/confirm", function (request, response){
     //show this file when the "/" is requested
     response.sendFile(__dirname+"/src/confirm.html");
 });
 app.get("/logout", function (request, response){
     //show this file when the "/" is requested
     response.sendFile(__dirname+"/src/logout.html");
 });
 app.get("/commercial", function (request, response){
     //show this file when the "/" is requested
     response.sendFile(__dirname+"/src/commercial.html");
 });
 app.get("/login", function (request, response){
     //show this file when the "/" is requested
     response.sendFile(__dirname+"/src/login.html");
 });

 app.get("/portal", function (request, response){
     //show this file when the "/" is requested
     response.sendFile(__dirname+"/src/portal.html");
 });
 app.get("/opp.css", function (request, response){
     //show this file when the "/" is requested
     response.sendFile(__dirname+"/src/opp.css");
 });
  app.get("icon.ico", function (request, response){
     //show this file when the "/" is requested
     response.sendFile(__dirname+"/images/icon.ico");
 });
 //start the server
 app.listen(8080);
 
 console.log("Something awesome to happen at http://localhost:8080");