import Human from './abstract-human'
export default class Person4 extends Human{
    constructor(name:string){
        super(name);
    }
    showAge():number {
        return this.age;
    }
}
