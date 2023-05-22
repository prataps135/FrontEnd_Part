import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: IUser;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe((params) => {
      //  this.user = this.userService.getUserByID(+params['id']);

      this.userService.getUserByIdViaREST(+params['id']).subscribe(
        user => this.user = user,
        err => console.log("Got an error while fecting the user details.", err),
        () => console.log("Fet of user details is completed")
      );
    });

    this.activatedRoute.queryParams.subscribe((qs) => {
      console.log("get the querry string as" + qs);
    });
  }

  createUser() {
    this.userService.createUser(this.user).subscribe(
      user => alert(`New user has been created with the id: ${user.id}`),
      err => alert(`Got an error as : ${err}`),
      () => alert('Creation of user was successful!')
    );
  }

  updateUser() {
    this.user.name = 'Pratap Singh Sisoida';
    this.user.email = 'pratap@gmail.com';
    this.userService.updateUser(this.user).subscribe(
      user => alert(`New user has been updated!`),
      err => alert(`Got an error as : ${err}`),
      () => alert('Updation of user was successful!')
    );

  }
  deleteUser() {
    this.userService.deleteUser(this.user.id).subscribe(
      user => alert(`New user has been deleted!`),
      err => alert(`Got an error as : ${err}`),
      () => alert('Deletion of user was successful!')
    );

  }
  getUserPosts() {

  }
}
