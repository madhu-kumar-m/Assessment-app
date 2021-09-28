import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from './auth-service.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [AuthServiceService, LocalStorageService]
})
export class LoginPageComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private authService:AuthServiceService, private localStorageService: LocalStorageService,
    private route:Router) { }

  ngOnInit(): void { 

    this.initForm();

  }


  initForm()  {
    this.formGroup = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])

    })
  }


  loginProcess()  {
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe( res => {
        if(res.success) {
          this.localStorageService.store('user', res);
          this.route.navigate(['admin-navpage/dashboard']);
          console.log(res);
        } else {
          console.log(res);
        }
      })
    }
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
