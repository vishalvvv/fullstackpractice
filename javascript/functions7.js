//call by value 
var x=100,y=200;
function m(a,b){
    a=0;
    b=0;
    }
m(x,y); // number,boolean and string follow call by value
console.log(x+y);

//call by reference
var user={
    name:"vishal",
    address:"hyderabad"
}
 function m(y){
     y.name="aneesha";
     y.address="chennai";
 }
 m(user); //non primitive types- follow call by reference
 console.log(user.name);


 