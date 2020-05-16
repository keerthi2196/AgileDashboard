import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  apiUrl:string = "/users/authenticate";

  constructor(private httpClient:HttpClient) { }

  authenticateUser(userModel : any){
    return this.httpClient.post<any>(this.apiUrl,userModel);
  }
}
