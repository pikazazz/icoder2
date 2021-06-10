import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {CardModule} from 'primeng/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import { MenubarComponent } from './menubar/menubar.component';
import { HomeComponent } from './home/home.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentComponent } from './student/student.component';
import { FormInputComponent } from './form-input/form-input.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import {TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { FormEditComponent } from './form-edit/form-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    AddStudentComponent,
    StudentComponent,
    FormInputComponent,
    ErrorpageComponent,
    EditStudentComponent,
    FormEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    InputTextModule,
    MenubarModule,
    CardModule,
    ButtonModule,
    TableModule,
    FormsModule,
    MessagesModule,
    MessageModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
