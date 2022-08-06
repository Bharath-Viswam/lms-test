import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService,private router:Router){}
  canActivate():boolean{
// to protect the admin routing
// protet admin is logged in
    if(this.authService.loggedInAdmin()){ 
      return true;
 }
 else{
     this.router.navigate(['tralogin']);
     return false;
 }
  }
  
}
