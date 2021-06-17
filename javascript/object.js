var employee={

    eid:101,
    ename:"ponnala",
    designation:"associate",
    project:"Tron",
    isMarried: false,
    getDetails: function(){
        return this.eid+"\t"+ this.ename+"\t"+this.designation+"\t"+this.project+"\t"+this.isMarried;
        
    }

}
console.log(employee.eid);
console.log(employee.ename);
console.log(employee.salary);

console.log(employee.getDetails());

