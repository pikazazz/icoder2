import { Component, OnInit } from '@angular/core';
import {  StudentAllCondition, StudentModel } from '../student';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  ResponseStudentAll } from '../student';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students =[{
    name:'Wissarut',
    email:'nongmixnatr@gmail.com',
    tel:'097-297-5174'
  }];
  studentModels:  StudentModel[] = []
  constructor(
    private studentService: StudentService,
    private messageService: MessageService,
    private appComponent: AppComponent,
    private router: Router,
    ) {
  }

  emailFormControl = new FormControl(null, [Validators.required, Validators.email]);
  nameFormControl = new FormControl(null,Validators.required);
  telFormControl = new FormControl(null,Validators.required)

  studentConditionFormGroup = new FormGroup({
    name: this.nameFormControl,
    email: this.emailFormControl,
    tel: this.telFormControl
  })
  clearStudent(){
    this.studentModels = []
    // this.nameFormControl.reset();
    // this.emailFormControl.reset();
    // this.telFormControl.reset();
    this.studentConditionFormGroup.reset();
  }

  ngOnInit(): void {
  }

  queryStudent(){
    // console.log(this.nameFormControl.value)
    // console.log(this.emailFormControl.value)
    // console.log(this.telFormControl.value)

    const name = this.nameFormControl.value;
    const email = this.emailFormControl.value;
    const tel = this.telFormControl.value;

    // console.log(this.studentConditionFormGroup.value)

    const condition:StudentAllCondition = {};


    if(name){
      condition.name = name;
    }
    if(email){
      condition.email = email;
    }
    if(tel){
      condition.tel = tel;
    }

    //condition =  {name: '123', email:'12312', tel:'3123123'}

    this.studentService.getStudentAll(condition)
    .subscribe(
      response=>{
          this.studentModels = response.result
      },
      (error: HttpErrorResponse)=>{
        this.messageService
        .add({
          severity:'error',
          summary: 'Error',
          detail: error.statusText
        });

        this.studentModels =[];
      }
    );



  }

  deleteStudent(student: StudentModel){
    // this.http.delete('/training-demo/student/'+student.id);
    this.studentService.deleteStudent(student.id)
    .subscribe(response=>{
      this.messageService
      .add({severity:'success',
       summary: 'Success',
      detail: 'ลบสำเร็จแล้วววว'});

      const index = this.studentModels
      .findIndex(model=>model.id===student.id)

      if(index>=0){
        this.studentModels.splice(index,1);
      }
      // this.queryStudent();
    })
  }

  editStudent(student: StudentModel){
    this.appComponent.editStudent = student;
    this.router.navigate(['edit'])
  }
}
