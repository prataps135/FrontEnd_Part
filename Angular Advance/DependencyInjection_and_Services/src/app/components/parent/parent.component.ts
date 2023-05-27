import { Component, OnInit } from '@angular/core';
import { Laptop } from 'src/app/classes/laptop';
import { HookLogger, Readonly } from 'src/app/decorators/class.decorator';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
@HookLogger()
export class ParentComponent implements OnInit {

  @Readonly('This is a readonly string. Will not change!') readonly:string; 
  
  constructor(private userService: UserService) { }

  users: IUser[];
  filterIdType: string;


  ngOnInit(): void {
    this.users = this.userService.getUsers();
    this.filterIdType = '';
    let laptop: Laptop = new Laptop();
    console.log(laptop);

    console.log(this.readonly);
    this.readonly = 'This was changed!';
    console.log(this.readonly);
  }

  addUser() {
    this.userService.addUser({
      id: this.users.length + 2,
      name: 'Pratap Singh Sisodia',
      email: 'prataps135@gmail.com'
    });
  }
}
