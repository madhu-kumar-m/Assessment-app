import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  _loginUrl = "https://testing-intern-api.herokuapp.com/api/user/login"

  constructor( private http:HttpClient ) { }

  login(data):Observable<any> {
    return this.http.post(this._loginUrl, data);
  }



}
