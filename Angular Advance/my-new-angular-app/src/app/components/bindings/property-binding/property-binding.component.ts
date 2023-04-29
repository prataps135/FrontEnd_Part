import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent {
  message='bound via property binding';

  constructor(){}

  i = 1;
  getMessage(){
    console.log("Method called ",this.i++);
    return this.message;
  }
}
