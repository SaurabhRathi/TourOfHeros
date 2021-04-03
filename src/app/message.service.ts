import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messageList : string[]  = [];

  constructor() { 
    // this.add('1st message');
    // this.add('2nd message');
  }

  add(message : string) {
    this.messageList.push(message);
  }

  clear() {
    this.messageList = [];
  }

}
