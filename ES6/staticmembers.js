class Employee{
    eid;
    ename;
    static company="amazon"; //static variable
    getDetails(){
        return this.eid+ "\t"+ this.name;
    }
    static getEmployee(){ //static method
        return "hello";
    }
}
// var emp1=new Employee();
// emp1.eid=101;
//emp1.ename="vishal";
// console.log(emp1);
// var emp2=new Employee();
// emp2.eid=0023;
// console.log(emp2.eid);
// console.log(Employee.company);
 var emp1=new Employee();
 emp1.eid=101;
emp1.ename="vishal";
console.log(emp1.getDetails());
console.log(Employee.getEmployee());