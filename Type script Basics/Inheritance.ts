class A{
    private name1 = "Private Name";
    public name = "Public Name";
    constructor(){
        console.log("Name = "+this.name1);
    }
}
class B extends A{
    // name = "Class B";
    constructor(){
        super();
        console.log("Name = "+this.name);
    }
}

let obj1 = new B();
