import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome2',
  templateUrl: './welcome2.component.html',
  styleUrls: ['./welcome2.component.css']
})
export class Welcome2Component implements OnInit {
  @ViewChild('name') nameKey!:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  startQuiz(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);
    localStorage.setItem("course",this.nameKey.nativeElement.value);
  }
}
