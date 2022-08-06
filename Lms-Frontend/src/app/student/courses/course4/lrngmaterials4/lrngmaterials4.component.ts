import { Component, OnInit } from '@angular/core';
import { MaterialService } from 'src/app/material.service';
import { Router } from '@angular/router';
import{MaterialModel} from '../../../../trainer/materiallist/material.model';

@Component({
  selector: 'app-lrngmaterials4',
  templateUrl: './lrngmaterials4.component.html',
  styleUrls: ['./lrngmaterials4.component.css']
})
export class Lrngmaterials4Component implements OnInit {

  constructor(private materialService:MaterialService,private router:Router) { }
  materials:MaterialModel[] |any;
  file :any;
  ngOnInit(): void {
    this.materialService.getMaterialcsa().subscribe((data)=>{
      this.materials=JSON.parse(JSON.stringify(data));
       this.file = this.materials.file
      console.log(this.file);
      console.log(this.materials);
    })
  }

}
