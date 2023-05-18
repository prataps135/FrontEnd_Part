import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  user: { name: string } = { name: "Pratap" };

  changeProperty() {
    this.user.name = "Anju";
  }

  changeObject() {
    this.user = { name: "Sanjay" }
  }
}
