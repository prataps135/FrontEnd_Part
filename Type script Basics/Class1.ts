class Class1{

}
class A{
    name = "Pratap";
    display(name){
        console.log("Name parameter = "+name);
        console.log("Name class = "+this.name);
    }
}

var obj1 = new A();
obj1.display("Anju");