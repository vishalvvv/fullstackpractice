function register(){

    event.preventDefault();
    var username = getValueById('username');
    var password = getValueById('password');


    var email = getValueById('email');

    var user = {
        username:username,
        password:password,
        email:email

    }

    console.log(user);

    var http = new XMLHttpRequest();
    http.open("post","http://localhost:10020/api/v1/user/register");
    http.setRequestHeader('Content-type','application/json');
    http.send(JSON.stringify(user));
    http.onreadystatechange = function(){
        if(http.readyState == 4 && http.status == 201){
            console.log(this.responseText);
        }
    }
}

function getValueById(id){
    return document.getElementById(id).value;
}
function confirmPassword(){
    var password = getValueById('password');
    var cpassword = getValueById('cpassword');
    var msg= document.getElementById("msg");
    if(password == cpassword){
        msg.innerHTML="password matched";
    }
    else{
        msg.innerHTML="password did not match";
    }

    function validatePassword(){
        var pattern=/(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[\W])(?=.*{8,})/;
        var password =getValueById('password');
        if(pattern.test(password)){
            document.getElementById("pattern").innerHTML="password accepted";
        }
        else
        {
            document.getElementById("pattern").innerHTML="password did not match";  
        }

    }


}