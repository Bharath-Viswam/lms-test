import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-feedbacks1',
  templateUrl: './feedbacks1.component.html',
  styleUrls: ['./feedbacks1.component.css']
})
export class Feedbacks1Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Studentfeedback(){
    console.log('clicked')
    this.router.navigate(["student/course1"]);
  }
}
