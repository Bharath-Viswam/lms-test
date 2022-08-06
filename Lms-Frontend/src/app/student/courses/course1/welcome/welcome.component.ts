import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  @ViewChild('name') nameKey!:ElementRef;
  @ViewChild('course') courseKey!:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }
  startQuiz(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);
    localStorage.setItem("course",this.courseKey.nativeElement.value);
  }

}
