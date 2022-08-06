import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { Question2Service } from 'src/app/service/question2.service';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.css']
})
export class Question2Component implements OnInit {

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


  constructor(private question2Service:Question2Service,public router:Router) { }

  ngOnInit(): void {

    this.name=localStorage.getItem("name")!;
    this.course=localStorage.getItem("course")!;
    this.getAllQuestions();
    this.startCounter();
  }
  getAllQuestions(){
    this.question2Service.getQuestion2Json()
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
}
onTransfer(){
  alert("submitted");
  this.router.navigate(['/trainer/trainerexams']);

}
  
}



