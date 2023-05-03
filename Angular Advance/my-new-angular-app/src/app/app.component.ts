import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-new-angular-app';
  counter:number = 0;
  classToSet = 'positive';

  onCounterChange(buttonType:any){
    buttonType == 'INC' ? this.counter++ : this.counter--;
    this.classToSet = this.counter >= 0 ? 'positive' : 'negative';
  }
}
