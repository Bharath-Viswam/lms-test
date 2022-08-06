import { Component, OnInit } from '@angular/core';
import { MaterialService } from 'src/app/material.service';
import { MaterialModel } from '../../materiallist/material.model';

@Component({
  selector: 'app-learningmaterial',
  templateUrl: './learningmaterial.component.html',
  styleUrls: ['./learningmaterial.component.css']
})
export class LearningmaterialComponent implements OnInit {
  materials:MaterialModel[] |any;
  file :any;
  constructor(private materialService:MaterialService) { }

  ngOnInit(): void {
    this.materialService.getMaterialdsa().subscribe((data)=>{
      this.materials=JSON.parse(JSON.stringify(data));
       this.file = this.materials.file
      console.log(this.file);
      console.log(this.materials);
    })
  }

}
