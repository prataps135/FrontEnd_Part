import { Component } from '@angular/core';
import { CanComponentDeactivate } from 'src/app/guards/confirmation/confirmation.guard';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements CanComponentDeactivate{
  confirm(): boolean {
   return confirm("Are you sure you want to navigate away?");   
  }
}
