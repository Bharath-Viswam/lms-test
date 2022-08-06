import { Component, OnInit } from '@angular/core';
import { MaterialService } from 'src/app/material.service';
import { Router } from '@angular/router';
import { MaterialModel } from '../materiallist/material.model';

@Component({
  selector: 'app-trainerlearningmaterials',
  templateUrl: './trainerlearningmaterials.component.html',
  styleUrls: ['./trainerlearningmaterials.component.css']
})
export class TrainerlearningmaterialsComponent implements OnInit {

  constructor(private materialService:MaterialService,private router:Router) { }
  materials:MaterialModel[] |any;
  file :any;
  ngOnInit(): void {
    this.materialService.getMaterial().subscribe((data)=>{
      this.materials=JSON.parse(JSON.stringify(data));
       this.file = this.materials.file
      console.log(this.file);
      console.log(this.materials);
    })
  }

}
