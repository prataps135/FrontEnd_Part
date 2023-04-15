const arr:number[] =[1,2,3,4]; 
arr.push(5);

const names:string[]=["john","pratap"];
names.push("Anju");

const number:Array<number>=[1,2,3,4];
number.push(5);

const mixed:(number|string)[] = [1,"Pratap",2,"John"];
const mixed1:Array<number|string> = [1,"Pratap",2,"John"];
mixed.push(3);
mixed.push("anju");
// mixed.push(false);
