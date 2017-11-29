$(document).ready(function(){

//get api info for top stories
var apiKey = "cf2e5faa5f0b4dec846b014e6e89766b";
var queryUrl = 'http://api.nytimes.com/svc/archive/v1/2016/11.json?api-key="+apiKey+';

$.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
      	//get headlines and small summary
      	//get the div for the results box
      	//populate the results box

      });


//get api info for search term coming from input boxes




//populate html file with results
















});