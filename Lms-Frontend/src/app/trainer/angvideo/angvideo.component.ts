import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-angvideo',
  templateUrl: './angvideo.component.html',
  styleUrls: ['./angvideo.component.css']
})
export class AngvideoComponent implements OnInit {

  constructor( private router:Router) { }
  
  onBackButtonClick():void{
    this.router.navigate(['student/course1/lrngmaterials1']);
  }

  ngOnInit(): void {
  }

}
