import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  StudentModel } from '../student';
import { MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private router:Router,
    private studentService: StudentService
  ) { }
  studentModels:  StudentModel[] = []
  emailFormControl = new FormControl(null, [Validators.required, Validators.email]);
  nameFormControl = new FormControl(null,Validators.required);
  telFormControl = new FormControl(null,Validators.required)

  addStudentFormGroup = new FormGroup({
    email: this.emailFormControl,
    name: this.nameFormControl,
    tel: this.telFormControl,
  });
  ngOnInit(): void {
  }
  saveStudent() {
    // console.log(this.addStudentFormGroup.value)
    const student = this.addStudentFormGroup.value;
    // {name:'', tel:'', email:''}
    this.studentService.addStudent(student)
    .subscribe(response=>{
      this.messageService.add({severity:'success', summary: 'Success', detail: 'บันทึกสำเร็จแล้วววว'});
      // this.router.navigateByUrl('/student');
      this.router.navigate(['/student']);
    })
  }
  clearStudent(){
    this.studentModels = []
    // this.nameFormControl.reset();
    // this.emailFormControl.reset();
    // this.telFormControl.reset();
    this.addStudentFormGroup.reset();
  }

}
