import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialService } from 'src/app/material.service';
import { MaterialModel } from '../../materiallist/material.model';

@Component({
  selector: 'app-adddsalearningmaterial',
  templateUrl: './adddsalearningmaterial.component.html',
  styleUrls: ['./adddsalearningmaterial.component.css']
})
export class AdddsalearningmaterialComponent implements OnInit {
  learningItem=new MaterialModel('','','','');
  image:any;
  constructor(private materialService:MaterialService,public router:Router) { }
  image1:string='../../../assets/images/ba7.jpg';
  ngOnInit(): void {
  }
  select(event:any){
    if(event.target.files.length>0){
      const file = event.target.files[0];
      this.image=file;
    }
      }
      oSubmit(){
        const formdata =new FormData();
        formdata.append('file',this.image);
         formdata.append('title',this.learningItem.title);
         formdata.append('desc',this.learningItem.desc);
         formdata.append('url',this.learningItem.url);
         this.materialService.Addmaterialdsa(formdata);
         console.log(formdata);
         alert('sucessfully added material');
         this.router.navigate(['learmatedsa'])
}
}
