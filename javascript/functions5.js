// function expression
function f1(x){
    x();
}

function f2(y){
    y();
}

var funex=function(){
    console.log("iam anonymous function");
}

f1(funex);
    

f2(funex);

funex=null;
console.log(funex);
  