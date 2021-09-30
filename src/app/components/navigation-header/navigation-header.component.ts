import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.css']
})
export class NavigationHeaderComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }


  //Logout Function

  onLogout() {
    localStorage.removeItem('eq_user');
    localStorage.clear();
    this.route.navigate(['login']);
  }
}
