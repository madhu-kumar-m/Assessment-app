import { Injectable } from '@angular/core';
import {  CanActivate, CanActivateChild, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private route:Router) { }

  canActivate():boolean {
    if(localStorage.getItem("token")) {
       return true;
    } else {
      alert("User not Logged in!, Please Login.")
      this.route.navigate(['login']);
      return false; 
    }
  }

  canActivateChild():boolean {
    if(localStorage.getItem("token")) {
       return true;
    } else {
      alert("User not Logged in!, Please Login.")
      this.route.navigate(['login']);
      return false; 
    }
  }



  }

