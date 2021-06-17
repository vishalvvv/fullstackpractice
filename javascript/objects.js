var customer= {
                name:"vishal",
                accno:12343,
                balance:5000,
                adhaar:224556609,
                checkBalance: function(){
                    return this.balance;
                },
                deposit: function(amount){
                       if(amount > 0) {
                           this.balance+=amount;

                       }
                }
}
            console.log(customer.name);
            console.log(customer.checkBalance());
            customer.deposit(11200);
            console.log(customer.checkBalance());