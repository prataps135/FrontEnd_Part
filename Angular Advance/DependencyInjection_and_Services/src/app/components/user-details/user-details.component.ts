import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  users: Array< IUser >;
  
  user:any;

  constructor(private activatedRoute :ActivatedRoute, private userService: UserService) {}

  ngOnInit(){

    this.users = this.userService.getUsers();

    this.activatedRoute.params.subscribe((params)=>{
       this.user = this.users.filter((user)=>{
        { return user.id === +params['userId']}
      })[0];
    });

    this.activatedRoute.queryParams.subscribe((qs)=>{
      console.log("get the querry string as"+qs); 
    });
  }
}
