import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usernameSubject = new BehaviorSubject("")

  constructor() { }

  getUsername(){
    return this.usernameSubject;
  }
  setUsername(user:string){
    this.usernameSubject.next(user)
  }
}
