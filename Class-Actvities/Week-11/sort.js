var argArray = process.argv;

var numArray = []

for (var i = 2; i < argArray.length; i++){
    numArray.push(parseInt(argArray[i]));
}

numArray.sort(function(a, b){return a-b});

console.log(numArray);

numArray.forEach(element => {
    console.log(element[i])
});