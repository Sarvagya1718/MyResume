import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  baseUrl="http://localhost:3000/user";
  getUsers(){
    return this.http.get(this.baseUrl)
  }
}
