import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: Array< IUser >;

  constructor(private userService : UserService){}

  ngOnInit(){
    // this.users = this.userService.getUsers();

    this.userService.getUsersViaREST().subscribe(
      users => this.users = users
    );
  }
}
