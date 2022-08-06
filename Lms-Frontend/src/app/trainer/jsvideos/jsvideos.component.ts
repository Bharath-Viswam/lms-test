import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jsvideos',
  templateUrl: './jsvideos.component.html',
  styleUrls: ['./jsvideos.component.css']
})
export class JsvideosComponent implements OnInit {

  constructor(private router:Router) { }

  onBackButtonClick():void{
    this.router.navigate(['student/course1/lrngmaterials1']);
  }
  ngOnInit(): void {
  }

}

