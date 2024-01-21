function Employee(name,address){
    this.name=name;
    this.address=address;
   }
    Employee.prototype.getdetails=function(){ //prototype inheritance
        console.log(this.name + "\t"+ this.address);
}
var emp1=new Employee("chirag","chandigarh");
var emp2=new Employee("trishna","hyd");
var emp3=new Employee("ria","hyd");
console.log(emp1);
console.log(emp2);
emp3.getdetails();
emp1.getdetails();