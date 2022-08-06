import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
// import { StudentModel } from 'src/app/admin/adm-stu-access/studentaccess.model';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css']
})
export class StudentSignupComponent implements OnInit {
  image1:string='../../../assets/images/ba1.png';
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  
  Student={
    name:'',
    address:'',
    email:'',
    ph:'',
    edu:'',
    courses:'',
    pwd:'',
    repwd:'',
    isApproved:false
  }
  
  studentSignup(){
  this.authService.studentSignup(this.Student);
  alert('Congratulations, Your Account Has Been Successfully Created.');
  this.router.navigate(['stulogin']); 
 }
}
