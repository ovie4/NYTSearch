$(document).ready(function(){

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
      	}

      	
      	//get the div for the results box
      	//populate the results box

      });


//get api info for search term coming from input boxes




//populate html file with results
















});