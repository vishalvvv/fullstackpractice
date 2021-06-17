var bank= {
            bank_name:"icici",
            branch:"jntu"
}
  var customer=Object.create(bank);
  console.log(customer);
  console.log(customer.branch);
  console.log(customer.bank_name);
  customer.name="kiran";
  customer.balance=8000;
  customer.accno=4567843245;
  customer.name="drk murthy" //modified value
  console.log(customer);
