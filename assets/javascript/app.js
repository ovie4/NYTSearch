$(document).ready(function () {


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
          $(".news-headline").append("<p>"+"<span>"+i+"</span>"+snippet+"</p>");
        }

        
        //get the div for the results box
        //populate the results box

      });


  //get api info for search term coming from input boxes
  //get values of the inputs
  //make new queryURL based on inputs
  //display json to the dom
  $('#search-button').on('click', function () {
    $(".news-headline").empty();
    var search = $('#search-text').val();
    var searchURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=2d6d8bb60364453d8ab1e776b1a25537&q=" + search;

    $.ajax({
      url: searchURL,
      method: 'GET'
    }).done(function (response) {
      // console.log(response);
      for(var i=0; i < 11; i++){
        var newHeadline= response.response.docs[i].headline.main;
        $(".news-headline").append("<p>"+"<span>"+i+"</span>"+newHeadline+"</p>")
      }
      
      // console.log(response.response.docs[0].headline.main);
      // console.log(response);
    });
  });






  //populate html file with results
















})