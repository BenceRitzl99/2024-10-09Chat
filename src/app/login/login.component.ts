import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { router } from '@angular/router';
import {auth}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userName=""
  constructor(private auth:AuthService) {
    
  }

  login(){
    this.auth.setUsername(this.userName)
    this.router.navigate(['/Chat'])
  }

}
