import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm-nav',
  templateUrl: './adm-nav.component.html',
  styleUrls: ['./adm-nav.component.css']
})
export class AdmNavComponent implements OnInit {

  constructor(private router:Router,public authService:AuthService) { }

  ngOnInit(): void {
  }
  logoutAdmin(){
    localStorage.removeItem('token1');
    this.router.navigate(['tralogin']);
  }
}
