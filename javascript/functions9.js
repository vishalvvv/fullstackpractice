//Arrays
var array=[100,200];
array.push(900);
array.unshift(20);
var index = array.indexOf(100);
array.splice(index+1,0,150);
console.log(array);
array.pop();
array.shift();
console.log(array);

array.forEach(function(elm){
    console.log(elm);
})