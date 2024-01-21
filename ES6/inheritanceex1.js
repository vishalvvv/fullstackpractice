class A{
    a=10;
}
class B{
    a=20;
}
class C extends A,B{ //multiple inheritance

}

var c=new C();
console.log(c,a);