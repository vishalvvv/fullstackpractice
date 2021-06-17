var customer= {
    Name:"vishal",
    accno:123456789,
    balance:1000,
    adhaar_no:123332677,
    mno:985679321,
    bank:"ICICI",
    branch:"jntu",
    deposit: function(){
        console.log("deposit");
   },
   withdraw: function(){
       console.log("withdraw");
       
   }
        
    }
    console.log(customer.accno);
    console.log(customer.balance);

    customer.deposit();

