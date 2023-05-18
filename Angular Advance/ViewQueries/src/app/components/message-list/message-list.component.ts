import { Component , ViewChild, OnInit, AfterViewInit, ViewChildren, QueryList
  ,ContentChild, ContentChildren} from '@angular/core';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, AfterViewInit{

  @ViewChild(MessageComponent) firstMessageComponent:MessageComponent;
  @ViewChildren(MessageComponent) allMessageComponent: QueryList<MessageComponent>;

  @ContentChild(MessageComponent) firstProjectedMessageComponent:MessageComponent;
  @ContentChild('tempMessage') tempMessageComponent:MessageComponent;
  @ContentChildren(MessageComponent) allPorjectedMessageComponent: QueryList<MessageComponent>;

  messages:string[]=[
    'message 1',
    'message 2',
    'message 3',
    'message 4'
  ];
  message:string;

  constructor(){
    
  }
  ngAfterViewInit() {
    // this.firstMessageComponent.message = "This was changed from message list component ngAfterViewInit Method";
    this.allMessageComponent.toArray().forEach(message => {
      message.message = "New Message";
    });
  }

  ngAfterContentInit(){
    // this.firstProjectedMessageComponent.message='this is projected message';
    // this.allPorjectedMessageComponent.toArray().forEach(message =>{
    //   message.message = "New  Projected Message";
    // });
    this.tempMessageComponent.message = "this is tempMessage";
  }

  ngOnInit(){

  }
}
