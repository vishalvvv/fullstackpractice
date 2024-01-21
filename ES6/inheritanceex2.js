class Bank{
    constructor(name,ifscode){
        this.name=name;
        this.ifscode=ifscode;
    }
}
class Customer extends Bank{
    constructor(accno,Customername,bankname,ifscode){
        super(bankname,ifscode);
        this.accno=accno;
        this.Customername=Customername;

    }
}
var customer = new Customer(124456664,"vishal","icici","icici4325");
console.log(customer);