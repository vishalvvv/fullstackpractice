/* 
1. function with parameters and with return type
2. function without parameters and with return type 
3. function with parameters and without return type
4. function with parameters and without return type
*/

//1. function with parameters and with return type

function authenticate(username,password){
    if(username == "vishal" && password == "vishal"){
        return true;
    }
    else
    {
        return false;
    }
}
var result=authenticate("vishal","vishal");
if(result){
    console.log("success");
}
else
{
    console.log("login failure");
}

// 2. function without parameters and with return type 
function getScore(){
    return "12/1";
}
var data=getScore();
console.log(data);

// 3. function with parameters and without return type
function checkStatus(status){
    if(status == true){
        console.log("allow the user to cross other state");
    }
    else
    {
        console.log("stop the user to cross other state");
    }
}

// 4. function with parameters and without return type
function initApp(){
    console.log("load files");
}
initApp();

//5. Anonymous function
function f1(x){
    x();
}
f1(function(){
    console.log("iam anonymous");
});

// 6.using arrays
var array=[10,20,90,100,800,700];
array.forEach(function(element){
    console.log(element);
});