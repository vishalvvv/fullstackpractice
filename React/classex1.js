class user{
    name;
    mno;
    email;

    createAccount(name,mno,email){
         this.name=name;
         this.mno=mno;
         this.email=email;
    }
    checkstatus(){
        return this.name;
    }
    send(request){
        if(request <=0){
            console.log("no friends")
        }
        else
        {
            this.user += request;
            console.log("update requestaccepted",this.name);
        }
    }
    withdraw(request){
        if(request <=0){
            console.log("request withdrawn")
        }
        else
        {
            this.request -= user;
            console.log("updated request",this.request);
        }
    }
    receive(receiver,request){
        this.receiver -=request;
        receiver.request+= user;
    }
}
var user1=new user();
user1.createAccount("chirag",12344321,"hyderabad");
var user2=new user();
user2.createAccount("trishna",12344143,"hyderabad");

console.log(user1.checkstatus());
console.log(user2.checkstatus());

user1.send(user2,receiver);
console.log(user1.checkstatus());
console.log(user2.checkstatus());