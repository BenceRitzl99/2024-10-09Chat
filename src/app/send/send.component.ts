import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { auth } from '../auth.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrl: './send.component.css'
})
export class SendComponent {
  message=""
  userName=""
  
  constructor(private base:BaseService) {
    auth.getUsername().subscribe((res:any)=>this.userName=res)
  }
  
  sendMessage(){
    if (!(this.userName==""))
    {
    this.base.addMessage(this.message)
    this.message=""
    }
  }

}
