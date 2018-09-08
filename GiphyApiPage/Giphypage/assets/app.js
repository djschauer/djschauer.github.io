$(document).ready(function(){

var topics = ["thor", "loki", "the flash", "captain america", "iron man", "green arrow", "wonder woman"]

topics.forEach(element => {
    
var newBtn = $("<button>");
newBtn.addClass("gifBtn");
newBtn.text(element);
newBtn.attr("value", element);

$("#buttonDiv").append(newBtn);

});

$("#submit").click(function(){
    event.preventDefault();
    var userInput = $("#superhero").val();

    console.log(userInput);

    var newBtn = $("<button>");
    newBtn.addClass("gifBtn");
    newBtn.text(userInput);
    newBtn.attr("value", userInput);

    $("#buttonDiv").append(newBtn);

    $(".gifBtn").click(function(){
        var btnName = $(this).attr("value");
        var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=TKBAcXLSRcKqYfQvEvPNpww70IJQfEu8&q=" + btnName + "&limit=10&offset=0&rating=G&lang=en";
    
        $.ajax({
            url: queryUrl,
            method: "GET"
          }).then(function(response) {
            console.log(response);
            console.log(response.data[0]);
    
            response.data.forEach(element => {
                
                var imgUrl = element.images.original.url;
    
                var gif = $("<img>");
    
                gif.attr("src", imgUrl);
                gif.attr("alt", "gif image");
                gif.addClass("giffy")
    
                $("#gifsDiv").prepend(gif);
            });
        
        
          });
    
    });
});

$(".gifBtn").click(function(){
    var btnName = $(this).attr("value");
    var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=TKBAcXLSRcKqYfQvEvPNpww70IJQfEu8&q=" + btnName + "&limit=10&offset=0&rating=G&lang=en";

    $.ajax({
        url: queryUrl,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        console.log(response.data[0]);

        response.data.forEach(element => {
            
            var imgUrl = element.images.original.url;

            var gif = $("<img>");

            gif.attr("src", imgUrl);
            gif.attr("alt", "gif image");
            gif.addClass("giffy")

            $("#gifsDiv").prepend(gif);
        });
    
    
      });

});


});