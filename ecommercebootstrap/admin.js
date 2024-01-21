getProducts();
function getProducts(){
    var http = new XMLHttpRequest();

    http.open("get","http://localhost:10020/api/v1/product/list");
    http.setRequestHeader('Content-type', 'application/json');
    http.send();
    http.onreadystatechange = function(){

        if(http.readyState == 4 && http.status == 200){
            var response= JSON.parse(this.responseText);
             console.log('response',response);
             createTableList(response);
        }
    }
}