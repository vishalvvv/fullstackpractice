function getTimeStamp(){
    var date=new Date();
    var d=date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
    var t=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    return d+"    "+t;
}
console.log(getTimeStamp());