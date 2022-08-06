import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainerModel } from '../adm-tra-access/traineraccess.model';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-update-tra',
  templateUrl: './update-tra.component.html',
  styleUrls: ['./update-tra.component.css']
})
export class UpdateTraComponent implements OnInit {
  image:string='../../../assets/images/ba7.jpg';
  constructor(private authService:AuthService,private router:Router) { }

  trainerItem = new TrainerModel('','','','','','','','','','','','',true);

  ngOnInit(): void {
    let trainerId=localStorage.getItem("editTrainerId");
    console.log(trainerId);
    this. authService.getTrainerUpdate(trainerId).subscribe((data)=>{
      this.trainerItem =JSON.parse(JSON.stringify(data));
      console.log(this.trainerItem)
    })
  }
  editTrainerprof(){
    this.authService.editTrainer(this.trainerItem );
    alert('trainer profile sucessfully updated');
    // this.router.navigate(["admfsd"]);
  }
  
}
