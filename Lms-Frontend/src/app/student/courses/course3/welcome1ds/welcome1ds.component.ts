import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-welcome1ds',
  templateUrl: './welcome1ds.component.html',
  styleUrls: ['./welcome1ds.component.css']
})
export class Welcome1dsComponent implements OnInit {

  @ViewChild('name') nameKey!:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
 startQuiz(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);
    localStorage.setItem("course",this.nameKey.nativeElement.value);
  }
}
