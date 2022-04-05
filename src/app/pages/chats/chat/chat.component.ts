import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js';
import { HttpClient } from '@angular/common/http';
import { data, get } from 'jquery';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  userName: string| any = '';
  message: string | any = '';
  messages: any | [] = [];
  url: string = 'http://localhost:8090/api/new';



  constructor(private http:HttpClient) { }


  ngOnInit(): void {
    Pusher.logToConsole = true;

    const pusher = new Pusher('ajeri_jehovah', {
      cluster: 'eu'
    })

    const channel = pusher.subscribe('chat');
    channel.bind('message', (data:any)=>{
      this.messages.push(data);
    })

  }



  submit():void{
    this.http.post(this.url, {
    userName : this.userName,
    message: this.message
    }).subscribe((next:any)=>{
      this.message = '';
      console.log('chats>>', next);
    })
  }

}
