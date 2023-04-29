import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {
  animal ='🦁';

  onClick(){
    alert("Button was clicked");
  }

  onKeyUp(keyUpEvent:any){
    keyUpEvent.code == "Enter" && alert("Enter pressed");
    // console.log(keyUpEvent);
  }
}
