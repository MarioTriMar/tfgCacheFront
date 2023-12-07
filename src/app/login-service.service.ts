import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private baseURL="http://localhost:8083/authenticator/"
  constructor(private httpClient:HttpClient) { }

  getUser(email:string, password:string){
    return this.httpClient.get<any>(this.baseURL+"login/"+email+"/"+password)
  }
}
