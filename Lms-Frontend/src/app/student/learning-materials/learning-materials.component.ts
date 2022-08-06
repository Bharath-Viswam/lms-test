import { TestService } from './../../test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning-materials',
  templateUrl: './learning-materials.component.html',
  styleUrls: ['./learning-materials.component.css']
})
export class LearningMaterialsComponent implements OnInit {
products:any;
  constructor(public TestService:TestService) { }

  ngOnInit(): void {
    this.TestService.getdata().subscribe((data)=>{
      this.products = JSON.parse(JSON.stringify(data));
      console.log(this.products)
    })
  
  }

}
