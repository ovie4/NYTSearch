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
//get values of the inputs
//make new queryURL based on inputs
//display json to the dom
var search = "apple";
var searchURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="+apiKey+"&q=search";

$.ajax({
  url: searchURL,
  method: 'GET'
}).done(function(response){
  console.log(searchURL);
  // console.log(response);
});






//populate html file with results
















});