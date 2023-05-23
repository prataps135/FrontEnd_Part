import { Component, OnInit } from '@angular/core';
import { Laptop } from 'src/app/classes/laptop';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: IUser[];
  filterIdType: string;


  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.filterIdType = '';
    let laptop: Laptop = new Laptop();
    console.log(laptop);
  }

  addUser() {
    this.userService.addUser({
      id: this.users.length + 2,
      name: 'Pratap Singh Sisodia',
      email: 'prataps135@gmail.com'
    });
  }
}
