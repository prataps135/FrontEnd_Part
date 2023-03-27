class Class2{
    // var for global scope
    // let for local scope
    constructor(){
        for(var i =0 ; i<=10; i++){
            console.log("I = "+i);
        }
        console.log('I ' +i);
    }
}
let obj1 = new Class2();