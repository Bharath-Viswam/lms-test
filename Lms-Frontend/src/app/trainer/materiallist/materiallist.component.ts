import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialService } from 'src/app/material.service';
import { MaterialModel } from './material.model';

@Component({
  selector: 'app-materiallist',
  templateUrl: './materiallist.component.html',
  styleUrls: ['./materiallist.component.css']
})
export class MateriallistComponent implements OnInit {

  learningItem=new MaterialModel('','','','');
  image:any;
  constructor(private materialService:MaterialService,public router:Router) { }

  // onBackButtonClick():void{
  //   this.router.navigate(['student/course1/lrngmaterials1']);
  // }
  image1:string='../../../assets/images/ba7.jpg';
  ngOnInit(): void {

    // this.materialService.getMaterials().
    // subscribe((data)=>{
    //   console.log("data");
    //   this.materials=JSON.parse(JSON.stringify(data));
    //   console.log(this.materials);
    // })
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
         this.materialService.Addmaterial(formdata);
         console.log(formdata);
         alert('sucessfully added material');
         this.router.navigate(['trainer/trainerlearningmaterials'])
}

}
