import { Component } from '@angular/core';
import { StudentModel } from './student';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MessageService]
})
export class AppComponent {
  title = 'icoder2';
  editStudent: StudentModel| null = null;

}
