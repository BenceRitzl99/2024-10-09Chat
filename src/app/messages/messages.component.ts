import { afterRender, Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';
import { Subscription } from 'rxjs';
import { auth } from '../auth.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent  implements OnInit {
  messages:any=[]
  userName=""
  feliratkozas!:Subscription
  

  constructor(private base:BaseService) { 

    auth.getUsername().subscribe((res:any)=>this.userName=res)
    afterRender(()=>document.getElementById("pageEnd")?.scrollIntoView({behavior:"smooth", block:"start", inline:"nearest"}))
    
      
  }
  ngOnInit(): void {
    this.feliratkozas=this.base.getAllMessage().subscribe(
      (res:any)=>{
        this.messages=[]
        for (const key in res) {
        console.log(res[key].uzi)
      
      this.messages.push(res[key])
        }
    }
    
    
  )}

    ngOnDestroy(): void {
      if (this.feliratkozas) this.feliratkozas.unsubscribe();
    }

    pageDown(){
      document.getElementById("pageEnd")?.scrollIntoView({behavior:"smooth", block:"start", inline:"nearest"})
    }
      
    

  
  

}
