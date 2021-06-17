class Customer{
    name;
    balance;
    mno;
    address;

    createAccount(name,balance,mno,address){
         this.name=name;
         this.balance=balance;
         this.mno=mno;
         this.address=address;
         this.accountNumber=1011;
    }
    checkBalance(){
        return this.balance;
    }
    deposit(amount){
        if(amount <=0){
            console.log("amount should not be less than 0 or equals to 0")
        }
        else
        {
            this.balance += amount;
            console.log("updated balance",this.balance);
        }
    }
    withdraw(amount){
        if(amount <=0){
            console.log("amount should not be less than 0 or equals to 0")
        }
        else
        {
            this.balance -= amount;
            console.log("updated balance",this.balance);
        }
    }
    transfer(receiver,amount){
        this.balance -=amount;
        receiver.balance+= amount;
    }
}
var customer1=new Customer();
customer1.createAccount("chirag",9000,12344321,"hyderabad",1011);
var customer2=new Customer();
customer2.createAccount("trishna",40000,12344143,"hyderabad",1025);

console.log(customer1.checkBalance());
console.log(customer2.checkBalance());

customer1.transfer(customer2,5000);
console.log(customer1.checkBalance());
console.log(customer2.checkBalance());