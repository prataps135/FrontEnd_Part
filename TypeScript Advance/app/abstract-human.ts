import Iper from './Iper'
export default abstract class Human implements Iper {
    name: string;
    age: number;
    constructor(name:string){
        this.name=name;
    }
    abstract showAge():number;
}