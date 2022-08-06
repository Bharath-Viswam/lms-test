import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { Question1dsaService } from 'src/app/service/question1dsa.service';

@Component({
  selector: 'app-question1ds',
  templateUrl: './question1ds.component.html',
  styleUrls: ['./question1ds.component.css']
})
export class Question1dsComponent implements OnInit {

  public questionList:any=[];
  public currentQuestion:number=0;
  public points:number=0;
  counter=60;
  correctAnswer:number=0;
  incorrectAnswer:number=0;
  interval$:any;
  isQuizCompleted:boolean=false;
  public name:String="";
  public course:String="";

  constructor(private question1dsService:Question1dsaService) { }

  ngOnInit(): void {

    this.name=localStorage.getItem("name")!;
    this.course=localStorage.getItem("course")!;
    this.getAllQuestions();
    this.startCounter();
  }
  getAllQuestions(){
    this.question1dsService.getQuestion1dsJson()
    .subscribe(res=>{
      // console.log(res.questions);
      this.questionList=res.questions;
      
    })
  }

  nextQuestion(){
    this.currentQuestion++;
    this.counter=60;
  }

  previousQuestion(){
    this.currentQuestion--;
  }
  answer(currentQno:number,option:any)
{
  if(currentQno===this.questionList.length){
    this.isQuizCompleted=true;
    this.stopCounter();
  }
  if(option.correct){
    this.points+=1;
    this.correctAnswer++;
    this.currentQuestion++;
    this.counter=60;
  }
  else{
    this.currentQuestion++;
    this.incorrectAnswer++;
    this.counter=60;
  }
}
startCounter(){
this.interval$=interval(1000).subscribe(val=>{
  this.counter--;
  if(this.counter===0){
    this.currentQuestion++;
    this.counter=60;
    
  }
});
setTimeout(() => {
  this.interval$.unsubscribe();
}, 600000);
}
stopCounter()
{
this.interval$.unsubscribe();
this.counter=0;
}
resetCounter(){
  this.stopCounter();
  this.counter=60;
  this.startCounter();
}

resetQuiz()
{

  this.resetCounter();
  this.getAllQuestions();
  this.points=0;
  this.counter=60;
  this.currentQuestion=0;
}}



