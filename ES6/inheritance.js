class A{
    m1(){
        console.log("m1()");
    }
}
class B extends A{
   m2(){
       console.log("m2()");
   }

}
var b=new B();
b.m2();
b.m1();