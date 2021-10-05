import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BranchServicesService {

  private _url: string = "http://testing-intern-api.herokuapp.com/api/branch/branches";

  token = localStorage.getItem('token');

   headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
     'Authorization': "Bearer "+ this.token
  });


  constructor(private http:HttpClient) { }


  getBranches():any {
    const httpOptions = {headers: this.headers_object}
    return this.http.get(this._url, httpOptions);
  }



}
