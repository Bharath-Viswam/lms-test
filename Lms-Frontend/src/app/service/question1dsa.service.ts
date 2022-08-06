import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Question1dsaService {

  constructor(private http:HttpClient) { }
  getQuestion1dsJson(){
    return this.http.get<any>("/assets/question2ds.json");
  }
}
