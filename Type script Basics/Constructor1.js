var Constructor1 = /** @class */ (function () {
    // constructor created
    function Constructor1() {
        console.log("Hi from constructor");
    }
    // display method created
    Constructor1.prototype.display = function () {
        console.log("Hi from display method");
    };
    return Constructor1;
}());
// object of class created
var obj1 = new Constructor1();
obj1.display();
