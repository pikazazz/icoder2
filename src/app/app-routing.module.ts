import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AddStudentComponent} from './add-student/add-student.component';
import {StudentComponent} from './student/student.component';
import {EditStudentComponent} from './edit-student/edit-student.component';
import {ErrorpageComponent} from './errorpage/errorpage.component';
const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'add',component:AddStudentComponent},
  {path:'edit',component:EditStudentComponent},
  {path:'student',component:StudentComponent},
  {path:'**',component:ErrorpageComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
