class Demo{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    fun() {
        console.log("this is a function");
    }
}

class Demo1{

}

var is;
var obj = new Demo();
console.log(obj instanceof Demo);
console.log(obj instanceof Demo1);