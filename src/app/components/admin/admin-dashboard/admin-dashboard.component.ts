import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  decodeToken = new JwtHelperService();
  userName: any;
  decodedDetails: any;
  userRole:any;

  constructor(private route: Router) { }

  ngOnInit(): void {
    const localToken:any = localStorage.getItem("token");
    const decodedDetails: any = this.decodeToken.decodeToken(localToken);
    this.userName = decodedDetails.user.firstName + " " + decodedDetails.user.lastName;
    this.userRole = decodedDetails.user.role;

      // Check if user not logged in then redirect to login
      if(!localStorage.getItem("token")){
        this.route.navigate(['login']);
      }
  
  }

}
