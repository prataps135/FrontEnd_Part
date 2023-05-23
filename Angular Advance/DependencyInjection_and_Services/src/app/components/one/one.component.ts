import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  prop: string;
  subscribe: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // the value changed but not get detected by app
    //   this.prop = this.userService.getProp();

    // so we use
    this.subscribe = this.userService.propChanged.subscribe(
      prop => this.prop = prop
    );
  }

  changeProp() {
    this.userService.setProp('Bar');
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }
}
