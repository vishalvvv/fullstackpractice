var str="Aaam"
var pattern=/[A-Z]+m/;
console.log(pattern.test(str));

var str="Am"
var pattern=/[A-Z]+m/;
console.log(pattern.test(str));


var str="m*"
var pattern=/[A-Z]*m/;
console.log(pattern.test(str));

var str="AAAm"
var pattern=/[A-Z]?m/;
console.log(pattern.test(str));

var str="AAAm"
var pattern=/[A-Z]{3}/;
console.log(pattern.test(str));

var str="AAmmm"
var pattern=/[A-Z]{2,3}/;
console.log(pattern.test(str));

var str="AAAAAAAAA"
var pattern=/[A-Z]{2,}/;
console.log(pattern.test(str));

var str="8AAAAAAAAA"
var pattern=/^[0-9]/;
console.log(pattern.test(str));

var str="8AAAAAAAAmmA"
var pattern=/^[0-9].+[A-Z]$/;
console.log(pattern.test(str));


var str="hello how are you"
var pattern=/hello(?= how)/;
console.log(pattern.test(str));






