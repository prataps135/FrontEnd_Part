import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  communicationModes: string[];
  genders: string[];

  constructor() {

  }

  ngOnInit(): void {
    this.communicationModes = ['Phone', 'Email'];
    this.genders = ['Male', 'Female', 'Other'];
  }

  onSubmit(userFrom: any, name: any) {
    console.log("Form sumitted!", userFrom, name);
    // console.log(userFrom.value);

  }
}
