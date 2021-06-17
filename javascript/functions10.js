function filterData(array,datatype){
    
    if(typeof array != "object"){
        console.log("please provide valid input");
        return;
    }
    if(array.length == 0){
        console.log("array length should be atleast 1");
        return;
        
    }
    if(datatype == "number" || datatype == "string" || datatype =="boolean" || datatype == "object"){

        var result=array.filter(function(element){
            return typeof element == datatype;
        })
        console.log(result);
    }
    else
    {
        console.log("invalid datatype");
    }
}
 filterData([],'abc');