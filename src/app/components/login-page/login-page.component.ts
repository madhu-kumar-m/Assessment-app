import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from './auth-service.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [AuthServiceService]
})
export class LoginPageComponent implements OnInit {

  formGroup: FormGroup;
  showAlert: boolean = false;

  helper = new JwtHelperService();


  constructor(private authService:AuthServiceService, 
    private route:Router) { }

  ngOnInit(): void { 

    this.initForm();

  }

//Creating Instance of FromGroup and declaring variable to assign values and validate
  initForm()  {
    this.formGroup = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])

    })
  }


  // calling Login Post method from service file and authorizing user
  loginProcess()  {
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe( res => {
        const decodedToken = this.helper.decodeToken(res.token);
        if(decodedToken.user.userId == 2) 
        {
          this.route.navigate(['/nav/admin-dashboard']);
          localStorage.setItem("token", res.token);
        } 
        else if(decodedToken.user.userId == 1) {
          this.route.navigate(['/nav/student-dashboard']);
          localStorage.setItem("token", res.token);
        }
        else {
          alert("Login Failed!, Please try again.")
        }
      },
        err => {
          this.showAlert = true;
        }
        )}
  }


 


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
