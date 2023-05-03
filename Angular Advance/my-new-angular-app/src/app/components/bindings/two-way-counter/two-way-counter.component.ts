import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-two-way-counter',
  templateUrl: './two-way-counter.component.html',
  styleUrls: ['./two-way-counter.component.scss']
})
export class TwoWayCounterComponent {
  constructor(){}
  @Input() counter:number;
  @Output() counterChange:EventEmitter<number> = new EventEmitter<number>();

  handleButton(operation:string){
    operation == 'INC'? this.counter++ : this.counter--;
    this.counterChange.emit(this.counter);
    console.log(operation);
  }
}
