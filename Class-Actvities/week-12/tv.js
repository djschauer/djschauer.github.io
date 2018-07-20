var request = require("request");
var fs = require("fs");

var TV = function() {
  this.findShow = function(show) {
    // The following URL can be used to search the TV Maze API for a given show
    var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

    request(URL, function(err, response, body) {
      
      if (err === null && response.statusCode === 200){
      var stringData = JSON.parse(body);
      

      var data = {
        show: stringData.name,
        genre: stringData.genres.join(", "),
        rating: stringData.rating.average,
        network: stringData.network.name,
        summary: stringData.summary
      }
      console.log("Show: " + data.show);
      console.log("Genre: " + data.genre);
      console.log("Rating: " + data.rating);
      console.log("Network: " + data.network);
      console.log("Summary: " + data.summary);
      } else {
        console.log("An error occured. Response Status: " + response.statusCode);
      }
    });
  };
  this.findActor = function(actor) {
    var URL = "http://api.tvmaze.com/singlesearch/people?q=" + actor;
    
    request(URL, function(err, response, body) {
      
      if (err === null && response.statusCode === 200){
      var stringData = JSON.parse(body);
      

      var data = {
        name: stringData.name,
        brithday: stringData.birthday,
        gender: stringData.gender,
        country: stringData.country.name,
        url: stringData.url
      }
      console.log("Name: " + data.name);
      console.log("Birthday: " + data.birthday);
      console.log("Gender: " + data.gender);
      console.log("Country: " + data.country);
      console.log("TV Maze URL: " + data.url);
      } else {
        console.log("An error occured. Response Status: " + response.statusCode);
      }
    });
  };
};

module.exports = TV;
