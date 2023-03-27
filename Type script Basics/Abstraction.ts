interface I{
    abc();
    xyz();
}
class B implements I{
    abc() {
        console.log("Interface abc");
    }
    xyz() {
        console.log("Interface xyz");
    }
}
let obj2 = new B();
obj2.abc();
obj2.xyz();
abstract class abs{
    abstract abc();
    xyz(){
        console.log("xyz");        
    }
}
class A extends abs{
    abc() {
        console.log("abc");
    }
    xyz() {
        console.log("xyz re-defined");
    }
}


let obj1 = new A();
obj1.abc();
obj1.xyz();
