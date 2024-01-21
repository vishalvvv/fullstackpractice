class A{
    constructor(){
        console.log("A Constructor!!");
    }
}
class B extends A{
    constructor(){
      super();
    console.log("B Constructor");
    }
}
var b=new B();
