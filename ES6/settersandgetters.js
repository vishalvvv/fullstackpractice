class Employee{
    eid;
    ename;
   set _eid(eid){
       if(eid <=0){
           console.log("eid should not be less than 0");
           return;
       }
    this.eid=eid;
    }
    get _eid(){
        return this.eid;
    }
   set _ename(ename){
        if(ename.length ==0){
            console.log("ename should not be empty");
            return;
        }
      this.ename=ename;
       }  
    
    get _ename(){
        return this._ename;
    }
}
var emp=new Employee();
emp._eid=0;
emp._ename="";
console.log(emp);