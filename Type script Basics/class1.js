var Class1 = /** @class */ (function () {
    function Class1() {
    }
    return Class1;
}());
var A = /** @class */ (function () {
    function A() {
        this.name = "Pratap";
    }
    A.prototype.display = function (name) {
        console.log("Name parameter = " + name);
        console.log("Name class = " + this.name);
    };
    return A;
}());
var obj1 = new A();
obj1.display("Anju");
