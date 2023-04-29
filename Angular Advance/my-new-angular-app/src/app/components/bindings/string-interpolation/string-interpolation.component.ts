import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.scss']
})
export class StringInterpolationComponent {
  message = `This is a random message`;

  i=1;
  getMessage(){
    console.log("Method called ",this.i++);
    return this.message;
  }
}
