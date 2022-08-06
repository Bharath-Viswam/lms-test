import { Component, OnInit } from '@angular/core';
import { AccessService } from 'src/app/access.service';
@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {
  image:string='../../../assets/images/ba6.jpg';
  image1:string='../../../assets/images/i1.png';
  image2:string='../../../assets/images/i3.png';
  constructor(private accessService:AccessService) { }

  ngOnInit(): void {
  }

}
