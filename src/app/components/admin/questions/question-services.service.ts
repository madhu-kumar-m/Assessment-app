import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionServicesService {

  private _geturl: string = "https://testing-intern-api.herokuapp.com/api/question/questions";
  private _posturl: string = "https://testing-intern-api.herokuapp.com/api/question/question";

  httpOptions:any;

  token = localStorage.getItem('token');

   headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
     'Authorization': "Bearer "+ this.token
  });


  constructor(private http:HttpClient) { }

  getQuestions():any {
    const httpOptions = {headers: this.headers_object}
    return this.http.get(this._geturl, httpOptions);
  }


  postQuestion(data: any):Observable<any> {
    const httpOptions = {headers: this.headers_object}
    return this.http.post(this._posturl, data, httpOptions);
  }






}


