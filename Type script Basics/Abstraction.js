var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var B = /** @class */ (function () {
    function B() {
    }
    B.prototype.abc = function () {
        console.log("Interface abc");
    };
    B.prototype.xyz = function () {
        console.log("Interface xyz");
    };
    return B;
}());
var obj2 = new B();
obj2.abc();
obj2.xyz();
var abs = /** @class */ (function () {
    function abs() {
    }
    abs.prototype.xyz = function () {
        console.log("xyz");
    };
    return abs;
}());
var A = /** @class */ (function (_super) {
    __extends(A, _super);
    function A() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    A.prototype.abc = function () {
        console.log("abc");
    };
    A.prototype.xyz = function () {
        console.log("xyz re-defined");
    };
    return A;
}(abs));
var obj1 = new A();
obj1.abc();
obj1.xyz();
