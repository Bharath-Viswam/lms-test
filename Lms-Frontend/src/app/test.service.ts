import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(public http:HttpClient) { }
  getdata(){
    return this.http.get('http://localhost:3000/studentlearningdata')
  }
  // loggin student for autharisation
  loggedInStudent(){
    return !!localStorage.getItem('token');
  }
  // get token value for student
getTokenStudent(){
  return localStorage.getItem('token');
 }
//  login trainer authentication
 loggedInTrainer(){
  return !!localStorage.getItem('token3');
 }
  // get token value for student
getTokenTrainer(){
  return localStorage.getItem('token3');
 }
}
