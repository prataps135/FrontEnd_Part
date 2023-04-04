import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  printName(name:String){
    alert("Hello "+name);
  }
  myChoice:boolean=true;
  userName:String="Pratap";
  emp=['chandu','bindu','raju'];
  fruits=['mango','banana'];
  addFruit(fruits:any){
    this.fruits.push(fruits);
  }
}
