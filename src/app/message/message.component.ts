import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  /*这个 messageService 属性必须是公共属性，因为你将会在模板中绑定到它。*/
  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}
