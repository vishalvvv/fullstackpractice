var str="hello how are you?";
var pattern = /o/g;
console.log(str.match(pattern).length);


var str="hello On how are Ok you?";
var pattern = /o/gi;
console.log(str.match(pattern).length);

var str="hello";
var pattern = /[abc]/;
console.log(pattern.test(str));


var str="helloc";
var pattern = /[abc]/;
console.log(pattern.test(str));


var str="helloc";
var pattern = /[^abc]/;
console.log(pattern.test(str));

var str="1234";
var pattern = /[a-z]/;
console.log(pattern.test(str));

var str="1234a";
var pattern = /[a-z]/;
console.log(pattern.test(str));

var str="1234a";
var pattern = /[A-Z]/;
console.log(pattern.test(str));


var str="1234A";
var pattern = /[A-Z]/;
console.log(pattern.test(str))


var str="1234Ab";
var pattern = /[A-z]/;
console.log(pattern.test(str))


var str="aseb";
var pattern = /[0-9]/;
console.log(pattern.test(str))

var str="aseb12";
var pattern = /[0-9]/;
console.log(pattern.test(str))

var str="aseb12";
var pattern = /[^0-9]/;
console.log(pattern.test(str))


var str="2!aB";
var pattern = /./;
console.log(pattern.test(str))


var str="abc@gmail.com";
var pattern = /@gmail[.]com/;
console.log(pattern.test(str))


var str="123";
var pattern = /\d/;
console.log(pattern.test(str))

var str="123";
var pattern = /\D/;
console.log(pattern.test(str))

var str="123a";
var pattern = /\D/;
console.log(pattern.test(str))


var str="_a";
var pattern = /\w/;
console.log(pattern.test(str))


var str="-@";
var pattern = /\w/;
console.log(pattern.test(str))

var str="-@#%$";
var pattern = /\W/;
console.log(pattern.test(str))













