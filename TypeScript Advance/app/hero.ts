import Person4 from "./person";
import Ihero from "./Ihero";
export default class Hero2 extends Person4 implements Ihero{
    superpowers: string[];
    constructor(name:string){
        super(name);
    }
    addPower(power:string):void{
        this.superpowers.push(power);
    }
    listPower():string[]{
        return this.superpowers;
    }
}