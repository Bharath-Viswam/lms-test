import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Question2Service {

  constructor(private http:HttpClient) { }
  getQuestion2Json(){
    return this.http.get<any>("/assets/question2.json");
  }
}
