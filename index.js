// adds packages for superheroes and displays it
const superheroes = require('superheroes');
var mySuperHeroName = superheroes.random();
console.log(mySuperHeroName);

//adds packages for super villains and displays it
const supervillains = require('supervillains');
var mySuperVillainName = supervillains.random();
console.log(mySuperVillainName);



// adds package for inspiration quote and displays it
const Quote = require('inspirational-quotes');
var myQuote = Quote.getRandomQuote();
console.log(myQuote);

//adds package for thoughts and displays it
const lib = require('thoughts');
var myThoughts = lib.random();
console.log(myThoughts);

//add package for popular movies and displays it
const Movie = require('popular-movie-quotes');
var myMovie = Movie.getRandomQuote();
console.log(myMovie); 

//add package for famous last words & displays it
const famousLastWords = require('famous-last-words');
var myFamousLastWords = famousLastWords.random();
console.log(myFamousLastWords);


//copy above information to a file
const fs = require("fs");
fs.writeFileSync("file1.txt", mySuperHeroName);
fs.writeFileSync("file2.txt", mySuperVillainName);
fs.writeFileSync("file3.txt", myQuote);
fs.writeFileSync("file4.txt", myMovie);
fs.writeFileSync("file5.txt", myFamousLastWords);