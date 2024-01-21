class Company{
    name="amazon";
    address="madhapur";
}
class Employee extends Company{
    eid;
    ename;
    eaddress;
}
var employee = new Employee();
employee.eid=101;
employee.ename="vishal";
employee.eaddress="hyd";
console.log(employee);