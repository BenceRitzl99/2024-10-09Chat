import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  userName="";
  constructor(private auth:AuthService){
    auth.getUsername().subscribe((res:any)=>this.userName=res)

  }

  logout(){
    this.auth.setUsername(this.userName)
  }

}
