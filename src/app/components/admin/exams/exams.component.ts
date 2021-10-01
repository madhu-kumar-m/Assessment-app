import { Component, OnInit } from '@angular/core';
import { ExamServiceService } from './exam-service.service';


@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css'],
  providers: [ExamServiceService]
})
export class ExamsComponent implements OnInit {

  examsList:any;

  constructor(private exams:ExamServiceService) { }

  ngOnInit(): void {

    this.exams.getExams().subscribe( data => { this.examsList = data},
      err => {err.alert("Not able to fetch Exams")});
    }


  }




