getCategories();

document.getElementById("saveBtn").style.display="none";

function getCategories(){
    var http = new XMLHttpRequest();

    http.open("get","http://localhost:10020/api/v1/category/list");
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
function addCategory(){
    event.preventDefault();
    var name=getValueById("name");
    var color=getValueById("color");
    var icon=getValueById("icon");
    var image=getValueById("image");

    var category = {
        name:name,
        color:color,
        icon:icon,
        image:image
    }
    console.log(category);

    var http = new XMLHttpRequest();

    http.open("post","http://localhost:10020/api/v1/category/add");
    http.setRequestHeader('Content-type','application/json');
    http.send(JSON.stringify(category));
    http.onreadystatechange = function(){

        if(http.readyState == 4 && http.status == 201){
            var response=JSON.parse(this.responseText);

            if(response.success){
                alert("category added");
                getCategories();
            }
            
        }
    }

}

function getValueById(id){
    return document.getElementById(id).value;
}

function createTableList(categories){

   var tbody= document.getElementById("tbody");

   var tbodydata="";

    for(var i=0;i<categories.length;i++){
     var category=categories[i];
        var categoryId=category._id;
     tbodydata += "<tr>"+ "<td>"+category.name +"</td>" + "<td>"+category.color +"</td>" + "<td>"+category.icon +"</td>" + "<td>"+ "<button id='deleteBtn' onclick=deleteCategory(\'"+categoryId+"\')>Delete</button>" +"</td>"+"<td>"+ "<button  onclick=editCategory(\'"+categoryId+"\')>Edit</button>" +"</td>" +"</tr>"
    }  
    tbody.innerHTML = tbodydata;
    }

    function deleteCategory(catId){

        console.log("delete category called",catId);
        
        

        var http = new XMLHttpRequest();

        http.open("delete","http://localhost:10020/api/v1/category/"+catId);
        http.setRequestHeader('Content-type', 'application/json');
        http.send();
        http.onreadystatechange = function(){
    
            if(http.readyState == 4 && http.status == 200){
                var response=JSON.parse(this.responseText);
                 console.log('response',response);
                 getCategories();
            }
        }
    }

        function editCategory(catId){

            var http = new XMLHttpRequest();
        
        http.open("get","http://localhost:10020/api/v1/category/"+catId);
        http.setRequestHeader('Content-type','application/json');
        http.send();
        http.onreadystatechange = function(){
    
            if(http.readyState == 4 && http.status == 200){
                var response=JSON.parse(this.responseText);
                  console.log(response);
                 document.getElementById("saveBtn").style.display="block";
                 document.getElementById("addCategoryBtn").style.display="none";
                 document.getElementById("saveBtn").setAttribute('onclick',"saveCategory(\'"+catId+"\')");
                 document.getElementById("name").value=response.name;
                 document.getElementById("color").value=response.color;
                 document.getElementById("icon").value=response.icon;
                 document.getElementById("image").value=response.image;

            }
        }

        }

        function saveCategory(catId){
            event.preventDefault();
            var name=getValueById("name");
            var color=getValueById("color");
             var icon=getValueById("icon");
              var image=getValueById("image");
        

    var category = {
        name:name,
        color:color,
        icon:icon,
        image:image
    }
    console.log(category);


    var http = new XMLHttpRequest();

    http.open("put","http://localhost:10020/api/v1/category/"+catId);
    http.setRequestHeader('Content-type','application/json');
    http.send(JSON.stringify(category));
    http.onreadystatechange = function(){

        if(http.readyState == 4 && http.status == 200){
            var response=JSON.parse(this.responseText);

            if(response.success){
                alert("category updated");
                document.getElementById("saveBtn").style.display="none";
                 document.getElementById("addCategoryBtn").style.display="block";
                 document.getElementById("categoryForm").reset();
                getCategories();
            }
            
        }
   }
}