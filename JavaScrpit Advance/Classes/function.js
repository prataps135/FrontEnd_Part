class Demo{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    fun() {
        console.log("this is a function");
    }
    add(){
        return this.x*this.y;
    }

}

var obj = new Demo(10,20);
obj.fun();
console.log(obj.add());
