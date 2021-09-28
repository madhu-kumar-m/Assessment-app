import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
 


  // Show and Hide of password characters
 showHidePassword(){
    let passwordField = document.getElementById("password")!;
    let eyeStyle = document.getElementById("pass-word")!;
    
    if(passwordField.getAttribute("type") == "password"){
      passwordField.setAttribute("type", "text");
      eyeStyle.setAttribute("class", "fa fa-eye my-auto mx-3");
    } else {
      passwordField.setAttribute("type", "password");
      eyeStyle.setAttribute("class", "fa fa-eye-slash my-auto mx-3");
    }
 }

}
