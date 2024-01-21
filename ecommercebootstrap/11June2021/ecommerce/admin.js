getProducts();
function  getProducts(){
    var http = new XMLHttpRequest();

    http.open("get","http://localhost:10020/api/v1/product/list");
    http.setRequestHeader('Content-type', 'application/json');
    http.send();
    http.onreadystatechange = function(){
          
        if(http.readyState == 4 && http.status == 200){
            var response = JSON.parse(this.responseText);  
              console.log('response',response);
              //createTableList(response);
        }
        
    }
}
getCategories();
function  getCategories(){
    var http = new XMLHttpRequest();

    http.open("get","http://localhost:10020/api/v1/category/list");
    http.setRequestHeader('Content-type', 'application/json');
    http.send();
    http.onreadystatechange = function(){
          
        if(http.readyState == 4 && http.status == 200){
            var response = JSON.parse(this.responseText);  
              console.log('response',response);

              var categories= document.getElementById("categories");

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
            "brand":  getValueById("brand"),
            "price": parseInt(getValueById("price")),
            "category":  getValueById("categories"),
            "countInStock": parseInt(getValueById("countInStock")),
            "rating": parseInt(getValueById("rating")),
            "isFeatured":  document.getElementById("isFeatured").checked,
        }
        console.log(product)
    
        var http = new XMLHttpRequest();
    
        http.open("post","http://localhost:10020/api/v1/product/add");
        http.setRequestHeader('Content-type', 'application/json');
        http.send(JSON.stringify(product));
        http.onreadystatechange = function(){
              
            if(http.readyState == 4 && http.status == 201){
                var response = JSON.parse(this.responseText);  
    
                 if(response.success){
                     alert("product added");
                    
                 }
            }
            
        }
    
    }
    function getValueById(id){
        console.log('id',id);
        return document.getElementById(id).value;
    }
    

   /* <tr>
    <td>John</td>
    <td>Doe</td>
    <td>john@example.com</td>
  </tr>
  <tr>
    <td>Mary</td>
    <td>Moe</td>
    <td>mary@example.com</td>
  </tr>
  <tr>
    <td>July</td>
    <td>Dooley</td>
    <td>july@example.com</td>
  </tr> 
  
   [
       {
           firstName:"John",
           lastName: "Doe",
           email: "john@example.com"

       },
       {
           firstName:"Mary",
           lastName: "Moe",
           email: "mary@example.com"

       },
       {
           firstName:"July",
           lastName: "Dooley",
           email: "july@example.com"

       }
   ]
  
  
  */
 createTable();
   function createTable(){

    var tbody = document.getElementById("tbody");

    var tbodydata ="";
   var users= [
        {
            firstName:"John",
            lastName: "Doe",
            email: "john@example.com"
 
        },
        {
            firstName:"Mary",
            lastName: "Moe",
            email: "mary@example.com"
 
        },
        {
            firstName:"July",
            lastName: "Dooley",
            email: "july@example.com"
 
        },
        {
            firstName:"sai",
            lastName: "kumar",
            email: "sai@example.com"
 
        }
    ]

    for(var i=0;i<users.length;i++){
         var user = users[i];
          tbodydata += "<tr>"+ "<td>"+user.firstName +"</td>" + "<td>"+user.lastName +"</td>" + "<td>"+user.email +"</td>" + "<td>"+ "<button class='btn btn-danger' id='deleteBtn' onclick=deleteCategory(\'"+0+"\')>Delete</button>" +"</td>"+"<td>"+ "<button class='btn btn-warning' onclick=editCategory(\'"+0+"\')>Edit</button>" +"</td>" +"</tr>"
     }
     tbody.innerHTML=tbodydata;
   }