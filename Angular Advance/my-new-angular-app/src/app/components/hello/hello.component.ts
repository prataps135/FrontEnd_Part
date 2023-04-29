import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent {
  
  @Input()
  name: string | undefined;
  
  constructor(){}
  ngOnInit(){}
}
