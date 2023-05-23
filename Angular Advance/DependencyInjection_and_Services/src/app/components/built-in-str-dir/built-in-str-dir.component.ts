import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-str-dir',
  templateUrl: './built-in-str-dir.component.html',
  styleUrls: ['./built-in-str-dir.component.css']
})
export class BuiltInStrDirComponent implements OnInit{

  messages: string[];
  showList: boolean;
  alertType: string;

  ngOnInit() {
      this.messages = [
        'message1',
        'message2',
        'message3',
        'message4',
        'message5'
      ];

      this.showList = true;
  }
}
