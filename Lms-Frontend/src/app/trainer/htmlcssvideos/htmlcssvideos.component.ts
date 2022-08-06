import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-htmlcssvideos',
  templateUrl: './htmlcssvideos.component.html',
  styleUrls: ['./htmlcssvideos.component.css']
})
export class HtmlcssvideosComponent implements OnInit {

  constructor(private router:Router) { }


  onBackButtonClick():void{
    this.router.navigate(['student/course1/lrngmaterials1']);
  }
  ngOnInit(): void {
  }

}
