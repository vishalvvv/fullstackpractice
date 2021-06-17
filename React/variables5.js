// rest parameters

function f1(a,b,c,...restparams){
    console.log(a,b,c);
    console.log(restparams);
}
f1(10,20,30,40,50,60);

//
var x= (a=10,b=29,c=0,...restparams) =>{
    console.log(restparams);
}
x();
