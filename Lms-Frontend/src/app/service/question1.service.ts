import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Question1Service {

  constructor(private http:HttpClient) { }
  getQuestion1Json(){
    return this.http.get<any>("/assets/questions1.json");
  }
}
