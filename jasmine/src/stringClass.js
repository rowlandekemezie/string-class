"use strict";
// method to check if a vowel exist in a string
String.prototype.hasVowels = function() {
  var vowelExp = /[aeiou]/i;
  return vowelExp.test(this);
};

// isQuestion method implenetation
String.prototype.isQuestion = function() {
  var quesExp = /\?$/i;
  return quesExp.test(this);
};

// method to change all lowercase letters to uppercase letters
String.prototype.toUpper = function() {
  var toUpperExp = /[a-z]/g;
  return this.replace(toUpperExp, function(letter){
    return String.fromCharCode(letter.charCodeAt() - 32); 
  });
};

// method to change all uppercase letters to lowercase letters
String.prototype.toLower = function(){
  var toLowerExp = /[A-Z]/g;
  return this.replace(toLowerExp, function(letter){
    return String.fromCharCode(letter.charCodeAt() + 32); 
  });
};

// method to change the the first letter of a string
String.prototype.ucFirst = function(){
  return this.substring(0, 1).toUpper() + this.substring(1);
};

// method to separate words and put them inside an array
String.prototype.words = function (){
  var wordsRgex = /[\s+]/g;
  return this.replace(wordsRgex, " ").split(wordsRgex);
};

// method to return the word count of a string
String.prototype.wordCount = function(){
  return this.words().length; 
};

// method to return formatted curency without formatting
String.prototype.fromCurrency = function (){
  var currencyRegex = /,/g;
  return +this.replace(currencyRegex, "");
};

// method to return currency in a formatted form
String.prototype.toCurrency = function (){
  var toCurrencyRegex = /(\d)(?=(\d{3})+(?!\d))/g;
  return this.toString().replace(toCurrencyRegex, "$1,");
};