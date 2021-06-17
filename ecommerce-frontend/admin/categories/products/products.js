getCategories();
function getCategories(){
    var http = new XMLHttpRequest();

    http.open("get","http://localhost:10020/api/v1/category/list");
    http.setRequestHeader('Content-type', 'application/json');
    http.send();
    http.onreadystatechange = function(){

        if(http.readyState == 4 && http.status == 200){
            var response= JSON.parse(this.responseText);
             console.log('response',response);

             var categories=document.getElementById("categories");

             for(var i=0;i<response.length;i++){

                 categories.innerHTML += "<option value="+response[i]._id+">"+response[i].name+"</option>";
             }

        }
    }
}

function addProduct(){
    event.preventDefault();

    var product = 
    
    {
        "name": getValueById("name"),
        "description": getValueById("description"),
        "richDescription": getValueById("richDescription"),
        "image": getValueById("image"),
        "brand": getValueById("brand"),
        "price": parseInt(getValueById("price")),
        "category": getValueById("categories"),
        "countInStock": parseInt(getValueById("countInStock")),
        "rating":parseInt(getValueById("rating")),
        "isFeatured": document.getElementById("isFeatured").checked ,
    }
    console.log(product)

    var http = new XMLHttpRequest();

        http.open("post","http://localhost:10020/api/v1/product/add");
        http.setRequestHeader('Content-type', 'application/json');
        http.send(JSON.stringify(product));
        http.onreadystatechange = function(){
    
            if(http.readyState == 4 && http.status == 201){
                var response=JSON.parse(this.responseText);

                if(response.success){
                    alert("product added");
                }
            }
        }
    }
function getValueById(id){
    return document.getElementById(id).value;
}