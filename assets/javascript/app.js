$(document).ready(function () {

<<<<<<< HEAD
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
=======
//get api info for top stories
var apiKey = "cf2e5faa5f0b4dec846b014e6e89766b";
var queryUrl = 'http://api.nytimes.com/svc/archive/v1/2016/11.json?api-key='+apiKey;

$.ajax({
        url: queryUrl,
        method: "GET"
      }).done(function(article) {
      	//get headlines and small summary
      	console.log(article);
      	var docs = article.response.docs;

      	for (var i = 0; i < 10; i++) {
      		var headline = docs[i].abstract;
      		var snippet = docs[i].snippet;
      		//put headline and snippet into results div
      		$(".news-headline").append(headline);
      	}

      	
      	//get the div for the results box
      	//populate the results box
>>>>>>> 35e24c009032ec89f955ac509445a49695fc2f11

        });


  //get api info for search term coming from input boxes
  //get values of the inputs
  //make new queryURL based on inputs
  //display json to the dom
  $('#search-button').on('click', function () {
    var search = $('#search-text').val();
    var searchURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=2d6d8bb60364453d8ab1e776b1a25537&q=" + search;

    $.ajax({
      url: searchURL,
      method: 'GET'
    }).done(function (response) {
      console.log(response);
      // console.log(response);
    });
  });






  //populate html file with results
















});