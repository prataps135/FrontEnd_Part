class A{
    fun(){
        console.log("this is A fun");
    }
    func(){
        console.log("func of A");
    }
    constructor(){
        console.log("Constructor of A");
    }
    static f(){
        console.log("This is static from A");
    }
}
class B extends A{
    fun(){
        super.fun();
        console.log("this is B fun");
    }
    constructor(){
        super();
        console.log("Constructor of B");
    }
    static f(){
        console.log("This is static from B");
    }

}

var obj = new B();
obj.fun();
obj.func();
// B.f();
// A.f();