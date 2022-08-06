import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainerexams',
  templateUrl: './trainerexams.component.html',
  styleUrls: ['./trainerexams.component.css']
})
export class TrainerexamsComponent implements OnInit {


  public questionList:any=[9];
  correctAnswer:number=0;
  incorrectAnswer:number=0;
  public points:number=0;

  constructor() { }

  ngOnInit(): void {
  }

}
