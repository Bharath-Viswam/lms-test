import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from 'src/app/test.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private router:Router,public testService:TestService) { }

  ngOnInit(): void {
  }
  logoutStudent(){
    localStorage.removeItem('token');
    this.router.navigate(['stulogin']);
  }
  }

