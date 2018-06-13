$( document ).ready(function() {

var apiKey = "api-key=82b9bb53e0504de1bbc493474a966560"
var search = "";
var numRecs = "";
var start = "";
var end = "";

$("#searchBtn").click(function(){
    search = "q" + $("#searchTerm").val();
    numRecs = "&fq" + $("#recordsNum").val();
    start = "&begin_date" + $("#startYear").val();
    end = "&end_date" + $("#endYear").val();
    console.log(search);
    console.log(numRecs);
    console.log(start);
    console.log(end);

    var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + apiKey + search + numRecs + start + end;
console.log(queryUrl);



$.ajax({
    url: queryUrl,
    method: "GET"
}).then(function(data){
console.log(data);
console.log(data.response.docs[1]);
console.log(data.response.docs[1].web_url);
console.log(data.response.docs[1].headline.main);
console.log(data.response.docs[1].source);
console.log(data.response.docs[1].byline.original);
console.log(data.response.docs[1].pub_date);

});
})

});