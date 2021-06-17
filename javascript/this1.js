function Customer(name,accno,balance){
    this.name=name;
    this.accno=accno;
    this.balance=balance;

    this.checkBalance = function(){
        console.log(this);
        return this.balance;
    }
    this.withdraw=function(amount){
          if(this.balance > amount){
              this.balance-=amount;
          }
    }
}
var Customer1 = new Customer("malla",1909,9000);
var Customer2 = new Customer("maheep",1800,10000);
console.log(Customer1.checkBalance());
console.log(Customer2.checkBalance());