var Class2 = /** @class */ (function () {
    // var for global scope
    // let for local scope
    function Class2() {
        for (var i = 0; i <= 10; i++) {
            console.log("I = " + i);
        }
        console.log('I ' + i);
    }
    return Class2;
}());
var obj1 = new Class2();
