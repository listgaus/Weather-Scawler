var http = require("http");
var https = require("https");
var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
var port = 3000; 

var city = '';
var country = '';
var weather = '';
var location = '';
var icon = '';




    /* let url="https://www.timeanddate.com/weather/"+country+"/"+city; */

    let url="http://www.google.com/search?q=weather+telaviv"

    request(url, function(err,resp,body){
        if(err){
            console.log(err);
        } else {
            $=cheerio.load(body);
           location = $(".wob_t").text();
            weather = $("#wob_loc").text();
           // icon = $("#cur-weather").attr('src');  

            /* const data = {weather: weather,
                  location: location,
                  icon: icon
                 }   */
            console.log(body);
            console.log("temp is "+location);
            /* res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify( {data: data} )); */
        };

    }

           );




/*
app.get('/getdata/:city', function (req, res) {
    updateQuery(country , req.params.city, res);

})

app.get('/style/style.css', function (req, res) {
    res.sendFile(path.join( __dirname, 'style/' ,'style.css'));
})

app.get('/js/:file', function (req, res) {
    res.sendFile(path.join( __dirname, 'js/' , req.params.file));
})

app.get('/fonts/:file', function (req, res) {
    res.sendFile(path.join( __dirname, 'fonts/' , req.params.file));
})

app.get('/images/:file', function (req, res) {
    res.sendFile(path.join( __dirname, 'images/' , req.params.file));
})


app.get('/', function (req, res) {

    res.sendFile(path.join(__dirname, 'index.html'));
})
*/



app.listen(port);
console.log('server listening on '+ port);

