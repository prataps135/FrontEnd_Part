import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { CustomValidations } from 'src/app/classes/custom.validations';

@Component({
  selector: 'app-new-user-reactive',
  templateUrl: './new-user-reactive.component.html',
  styleUrls: ['./new-user-reactive.component.css']
})
export class NewUserReactiveComponent implements OnInit {

  userForm: FormGroup;

  constructor() {

  }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('John Doe', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('John Doe')
      ]),
      // username: new FormControl('johndoe', CustomValidations.unique),
      username: new FormControl('johndoe', CustomValidations.asyncUnique),
      email: new FormControl('John@gmail.com'),
      phone: new FormControl('7845784578'),
      website: new FormControl('www.john.com'),
      address: new FormGroup({
        street: new FormControl('123 NE St'),
        suite: new FormControl('Suite 3442'),
        city: new FormControl('New Jersey'),
        zipcode: new FormControl('98754'),
      }),
      geo: new FormGroup({
        lat: new FormControl('123.225'),
        lng: new FormControl('124.555'),
      }),
      company: new FormGroup({
        name: new FormControl('Google'),
        catchPhrase: new FormControl('see world differently'),
        bs: new FormControl('company that runs the world'),
      }),
      hobbies: new FormArray([]),
    });
  }

  get name() {
    return this.userForm.get('name');
  }
  get username(){
    return this.userForm.get('username');
  }

  getControls() {
    return (this.userForm.get('hobbies') as FormArray).controls;
  }

  addHobby() {
    (<FormArray>this.userForm.get('hobbies')).push(new FormControl(''));
  }

  deleteHobby(index: number) {
    (<FormArray>this.userForm.get('hobbies')).removeAt(index);
  }

  resetForm(){
    this.userForm.reset();
  }

  onSubmit() {

  }
}
