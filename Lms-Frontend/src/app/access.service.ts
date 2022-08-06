import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  constructor(private http:HttpClient) { }

  // get student details to admin for access allocation
getstudetails(){
  return this.http.get('http://localhost:3000/studentdetails');
}
// get trainer details to admin for access allocation
getTrainerdetails(){
  console.log('get trainer details service file ok')
  return this.http.get('http://localhost:3000/trainerdetails');
}

// approve student
approveStudent(student:any){
  return this.http.put('http://localhost:3000/approve',student);
}

// approved student fsd01 list
aprovedStuList(){
  return this.http.get('http://localhost:3000/aprovestulist');
}
// approved student fsd02 list
aprovedStuListfsd02(){
  return this.http.get('http://localhost:3000/aprovestufsd2list');
}
// approved student dsa01 list
aprovedStuListdsa01(){
  return this.http.get('http://localhost:3000/aprovestudsa1list');
}
// approved student dsa02 list
aprovedStuListdsa02(){
  return this.http.get('http://localhost:3000/aprovestudsa2list');
}
// approved student csa01 list
aprovedStuListcsa01(){
  return this.http.get('http://localhost:3000/aprovestucsa1list');
}
// approved student csa02 list
aprovedStuListcsa02(){
  return this.http.get('http://localhost:3000/aprovestucsa2list');
}
// decline student
declineStudent(id:any){
return this.http.delete('http://localhost:3000/declinestu/'+id);
}

// delete entrolled student
deleteStudent(id:any){
  return this.http.delete('http://localhost:3000/deletestu/'+id);
}

// approve trainer
approveTrainer(trainer:any){
  return this.http.put('http://localhost:3000/approvetrainer',trainer);
}
// aproved trainer list
aprovedTrainer(){
  return this.http.get('http://localhost:3000/aprovetralist');
}
// aproved fsdtrainers
aprovedfsdTrainer(){
  return this.http.get('http://localhost:3000/aprovefsdtralist');
}
// aprove csa trainer
aprovedcsaTrainer(){
  return this.http.get('http://localhost:3000/aprovecsatralist');
}
// decline trainer
declineTrainer(id:any){
  return this.http.delete('http://localhost:3000/declinetrar/'+id);
}
// delete entrolled trainer
deleteTrainer(id:any){
  return this.http.delete('http://localhost:3000/deletetra/'+id);
}

}
