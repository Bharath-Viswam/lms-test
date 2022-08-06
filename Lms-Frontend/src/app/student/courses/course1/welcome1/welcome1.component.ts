import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';

@Component({
  selector: 'app-welcome1',
  templateUrl: './welcome1.component.html',
  styleUrls: ['./welcome1.component.css']
})
export class Welcome1Component implements OnInit {

  @ViewChild('name') nameKey!:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  startQuiz(){
    localStorage.setItem("name",this.nameKey.nativeElement.value);
    localStorage.setItem("course",this.nameKey.nativeElement.value);
  }
}
