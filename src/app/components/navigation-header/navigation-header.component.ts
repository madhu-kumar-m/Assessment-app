import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ExamServiceService } from '../admin/exams/exam-service.service';
import { QuestionServicesService } from '../admin/questions/question-services.service';

@Component({
  selector: 'app-navigation-header',
  templateUrl: './navigation-header.component.html',
  styleUrls: ['./navigation-header.component.css']
})
export class NavigationHeaderComponent implements OnInit {

  decodeToken = new JwtHelperService();
  userName: any;
  decodedDetails: any;
  userId: any;
  admin: boolean; 
  student: boolean;


  constructor(private route:Router,
                private examService:ExamServiceService,
                private questionService: QuestionServicesService) { }

  ngOnInit(): void {
    const localToken:any = localStorage.getItem("token");
    const decodedDetails: any = this.decodeToken.decodeToken(localToken);
    this.userName = decodedDetails.user.firstName + " " + decodedDetails.user.lastName;
    this.userId = decodedDetails.user.userId;

    //elements display
    if(this.userId == 2) {
      this.admin = true;
      this.student = false;
    } 
    else if (this.userId == 1) {
      this.admin = false;
      this.student = true;
    } 
    else {
      this.admin = true;
      this.student = true;
    }

     // Check if user not logged in then redirect to login
     if(!localStorage.getItem("token")){
      this.route.navigate(['login']);
    }


  }




  //Call Exam Get request
  examLists() {
    this.examService.getExams().subscribe();
  }

  //Call Question Get request
  questionLists() {
    this.questionService.getQuestions().subscribe();
  }


  //Logout Function
  onLogout() {
    localStorage.removeItem('token');
    localStorage.clear();
    this.route.navigate(['login']);
  }
}
