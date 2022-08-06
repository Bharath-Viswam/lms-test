import { Component, OnInit } from '@angular/core';
import { MaterialService } from 'src/app/material.service';
import { MaterialModel } from '../../materiallist/material.model';

@Component({
  selector: 'app-learnigmaterial',
  templateUrl: './learnigmaterial.component.html',
  styleUrls: ['./learnigmaterial.component.css']
})
export class LearnigmaterialComponent implements OnInit {
  materials:MaterialModel[] |any;
  file :any;
  constructor(private materialService:MaterialService) { }
 
  ngOnInit(): void {
    this.materialService. getMaterialcsa().subscribe((data)=>{
      this.materials=JSON.parse(JSON.stringify(data));
       this.file = this.materials.file
      console.log(this.file);
      console.log(this.materials);
    })
  }
  }


