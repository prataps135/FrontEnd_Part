import { Component , EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-counter-action',
  templateUrl: './counter-action.component.html',
  styleUrls: ['./counter-action.component.scss']
})
export class CounterActionComponent {
  constructor(){}
  @Output() counterChange:EventEmitter<string> = new EventEmitter<string>();

  handleButton(operation:string){
    this.counterChange.emit(operation);
    console.log(operation);
  }
}
