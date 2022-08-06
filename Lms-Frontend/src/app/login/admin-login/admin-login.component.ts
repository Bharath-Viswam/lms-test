import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  image:string='../../../assets/images/ba4.jpg';
 
  Admin={
    admineusername:'',
    adminepwd:''
  }
  constructor(private authService:AuthService,private router:Router ) { }

  ngOnInit(): void {
  }

  adminLogin(){
    this.authService.adminLogin(this.Admin)
    .subscribe(
      res => {
        localStorage.setItem('token1',res.token1)
        this.router.navigate(['/admfsd']);
      }
    )
  }
}
