function login(){

    event.preventDefault();
    var username = getValueById('username');
    var password = getValueById('password');
   

    var user = {
        username:username,
        password:password,
     

    }

    console.log(user);

    var http = new XMLHttpRequest();
    http.open("post","http://localhost:10020/api/v1/user/login");
    http.setRequestHeader('Content-type','application/json');
    http.send(JSON.stringify(user));
    http.onreadystatechange = function(){
        if(http.readyState == 4 && http.status == 200){
            console.log(this.responseText);
            document.getElementById("loginform").reset();
        }
    }
}

function getValueById(id){
    return document.getElementById(id).value;
}
function showPassword(){
    if(document.getElementById("showp").checked){
        document.getElementById("password").type="text";
    }
    else
    {
        document.getElementById("password").type="password";
    }
}