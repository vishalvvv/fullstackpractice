// call 
var user={
    name:"vishal",
    address:"hyderabad",
    getDetails: function(){
        return this.name + "\t"+ this.address;
    }
}

var x={
    name:"aneesha",
    address:"chennai"
}
console.log(user.getDetails.call(x));

// Apply
var user={
    name:"vishal",
    address:"hyderabad",
    getDetails: function(a,b){
        return this.name + "\t"+ this.address + a+"\t"+b;
    }
}

var x={
    name:"aneesha",
    address:"chennai"
}
var m=[10,20];
console.log(user.getDetails.call(x,m[0],m[1]));
console.log(user.getDetails.apply(x,m));
