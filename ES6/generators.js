function* f1(){
    console.log("line1");
    console.log("line2");
    yield "one";
    console.log("line3");
    console.log("line4");
    yield "two";
    console.log("line5");
    yield "three";
    console.log("line6");
}
var iterator=f1();
iterator.next();
iterator.next();
console.log("hey");
iterator.next();
iterator.next();