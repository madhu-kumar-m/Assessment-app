import { Component, OnInit } from '@angular/core';
import { QuestionServicesService } from './question-services.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  
  formGroup: FormGroup;
  
  questionsList: any;
  inputQuestionRow:boolean = false;
  showQuestionSuccess:boolean = false;
  showQuestionFailed:boolean = false;
  alertField:boolean = false;


  constructor(private questions: QuestionServicesService) { }


  ngOnInit(): void {

    this.questions.getQuestions().subscribe( data => { this.questionsList = data},
      err => {err.alert("Not able to fetch Questions")});


      $(function () {
        $('[data-toggle="tooltip"]')
      })  



      this.initQuestionForm();

  }


  //Creating Instance of FromGroup and declaring variable to assign values and validate
  initQuestionForm()  {
    this.formGroup = new FormGroup({
      title: new FormControl('',[Validators.required]),
      marks: new FormControl('',[Validators.required]),
      type: new FormControl('',[Validators.required]),
    })
  }

  // calling Login Post method from service file and authorizing user
  addQuestion()  {
    if(this.formGroup.valid){
      this.questions.postQuestion(this.formGroup.value).subscribe( res => {
        this.showQuestionSuccess = true;
        this.inputQuestionRow = false;
        this.questions.getQuestions().subscribe( data => { this.questionsList = data},
        err => {err.alert("Not able to fetch Questions")});
      },
        err => {
          this.showQuestionFailed = true;
          this.alertField = true;
        }
        )}
  }

  
  displayQuestionRow(){
    this.inputQuestionRow = true;
    this.formGroup.reset();
  }

  closeQuestionRow(){
    this.inputQuestionRow = false;
    this.formGroup.reset();
  }

  closeAlert(){
    this.showQuestionSuccess = false;
    this.showQuestionFailed = false;
    this.alertField = false;
  }
 


  
 
  


    

  

}
