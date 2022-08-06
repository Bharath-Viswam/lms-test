import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  // student signup
  studentSignup(Student:any){
    console.log('service file ok')
    return this.http.post<any>('http://localhost:3000/studentsignup',Student)
    .subscribe((data)=>{
      console.log(data);
  });
}
// student login
studentLogin(Student:any){
  return this.http.post<any>('http://localhost:3000/studentlogin',Student)
}
// token present or not
loggedIn(){
  return !!localStorage.getItem('token');
}
// get token value
getToken(){
  return localStorage.getItem('token');
 }

// admin
adminLogin(admin:any){
  return this.http.post<any>('http://localhost:3000/adminlogin',admin);
}

// token present or not for admin
loggedInAdmin(){
  return !!localStorage.getItem('token1');
}
// get token value for admi
getTokenAdmin(){
  return localStorage.getItem('token1');
 }


// trainer signup
trainerSignup(Trainer:any){
  return this.http.post<any>('http://localhost:3000/trainersignup',Trainer)
  .subscribe((data)=>{
    console.log(data);
});
}
// trainer login
trainerLogin(Trainer:any){
  return this.http.post<any>('http://localhost:3000/trainerlogin',Trainer)
}
// get student profile for edit 
getStudentUpdate(id:any){
  return this.http.get("http://localhost:3000/"+id);
}
// edit student
editStudent(student:any){
  console.log('client is updated');
  return this.http.put('http://localhost:3000/updatestuprf',student)
  .subscribe((data)=>{console.log(data)})
}
// get trainer details for edit
getTrainerUpdate(id:any){
  return this.http.get("http://localhost:3000/edittra/"+id);
}
// 
editTrainer(trainer:any){
  console.log('client is updated');
  return this.http.put('http://localhost:3000/updatetraprf',trainer)
  .subscribe((data)=>{console.log(data)})
}
}
