var isInit=false;
var index=0;
var datasource= [
    {
        name:"sapna",
        address:"hyderabad"

    },
    {
        name:"chirag",
        address:"hyderabad"
    },
    {
        name:"trishna",
        address:"hyderabad"
    }
]
var data;
do{
    if(isInit == false){
        data=datasource;
        console.log("data is initialized");
        isInit=true;
    }
    console.log(data[index].name+ "\t"+ data[index].address);
    index++;
}while(index < data.length)
