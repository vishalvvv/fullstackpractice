class A{
    m1(){
        console.log("m1() in A")
    }
    m2(){
        console.log("m2() in A")
    }
}
class B extends A{
    m1(){
        console.log("m1() in B");
        super.m1();
        super.m2();
    }
}
var b=new B();
b.m1();