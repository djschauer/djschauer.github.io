var argOne = process.argv[2];
var argTwo = parseInt(process.argv[3]);
var argThree = parseInt(process.argv[4]);

if (argOne === "add") {
    console.log(argTwo + argThree);
}

if (argOne === "subtract") {
    console.log(argTwo - argThree);
}

if (argOne === "multiply") {
    console.log(argTwo * argThree);
}

if (argOne === "divide") {
    console.log(argTwo / argThree);
}

if (argOne === "remainder") {
    console.log(argTwo % argThree);
}
if (argOne === "exp") {
    console.log(Math.pow(argTwo, argThree));
}