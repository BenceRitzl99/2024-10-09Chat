import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private url="https://szoftii1n-default-rtdb.europe-west1.firebasedatabase.app/messages.json"
  // private url="http://172.16.16.148:7178/api/Messages/"

  private messageSubject=new Subject()

  constructor(private http:HttpClient) { 

    this.downloadAllMessage()
    setInterval(()=>this.http.get(this.url).forEach((res)=>this.messageSubject.next(res)), 10000)
  }

  addMessage(message:string, userName:string){
    let body:any={}
    body.userName="RBence"
    body.uzi=message

    console.log("Body:", body)

    this.http.post(this.url, body).forEach(
      (res)=>console.log("Sikeres üzenetküldés", res)
    )
      
    

  }

  getAllMessage(){
    // return this.http.get(this.url)
    return this.messageSubject
  }

  private downloadAllMessage(){
    return this.http.get(this.url).subscribe(
      (res)=>this.messageSubject.next(res)
    )
  }




}
