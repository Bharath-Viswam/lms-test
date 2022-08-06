import { Component, OnInit } from '@angular/core';
import { AccessService } from 'src/app/access.service';
import { TrainerModel } from './traineraccess.model';

@Component({
  selector: 'app-adm-tra-access',
  templateUrl: './adm-tra-access.component.html',
  styleUrls: ['./adm-tra-access.component.css']
})
export class AdmTraAccessComponent implements OnInit {
  trainerdtls={
    tracouid:'',
    tracoubtch:''
  }
  title:string='Enroll Trainers';
  trainers:TrainerModel |any;
  nodata=false;

  date:string=new Date().toLocaleString().slice(0, 9);

  constructor(private accessService:AccessService) { }

  ngOnInit(): void {
    console.log('deatails');
    this.accessService.getTrainerdetails().subscribe((data)=>{
      this.trainers=JSON.parse(JSON.stringify(data));
      // find any trainer is present to approve
     
      if (this.trainers.length === 0) {
        this.nodata=true;
     } else {
      this.nodata=false
    }
    console.log(this.trainers.length)
    })
  }

// approve trainers
approveTrainer(trainer:any){
  trainer.tradate=this.date;
   trainer.tracouid=this.trainerdtls.tracouid;
   trainer.tracoubtch=this.trainerdtls.tracoubtch;
  this.accessService.approveTrainer(trainer).subscribe((data)=>{
    this.ngOnInit();
 })
}
// decline trainer
declineTrainer(trainer:any){
  this.accessService.declineTrainer(trainer._id)
  .subscribe((data)=>{
      this.ngOnInit();
   });
    }

}
