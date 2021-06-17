var a=100;

function f1(){
    console.log(b);
    var b=90;
    try{
        console.log(c);
    }
    catch(err){
        console.log(err.message);
    }
  
    console.log(a);

}
f1();
console.log("iam done");