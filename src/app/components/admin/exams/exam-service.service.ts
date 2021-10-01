import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamServiceService {

  private _url: string = "http://testing-intern-api.herokuapp.com/api/exam/exams";


  token = localStorage.getItem('token');

   headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
     'Authorization': "Bearer "+ this.token
  });

  
  

  constructor(private http:HttpClient) { }



  getExams():any {
    const httpOptions = {
      headers: this.headers_object
    }
    return this.http.get(this._url, httpOptions);
  }



}





