function square(num){
    return num*num;
}
var result=square(10);
console.log(result);

//using arrow function//

var sqr=num => num * num;
console.log(sqr(9));

//
function f1(){
    console.log(a);
    var a=10;
    if(8 > 2){
        var a=90;
        console.log(a);
    }
    console.log(a);
}
f1();

// let keyword
function f1(){
    console.log(a);
    var a=10;
    if(8 > 2){
        let a=90;
        console.log(a);
    }
    console.log(a);
}
f1();

// const keyword
const a=100;
console.log(a);

a=90;
console.log(a);

