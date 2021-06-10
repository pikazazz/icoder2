import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  constructor( private router: Router) { }

  items: MenuItem[] | any;

  ngOnInit() {
      this.items = [
          {
              label: 'CRUD',
              items: [
                  {label: 'Home',command: () => this.gotopage('home')},
                  {label: 'Student',command: () => this.gotopage('student')},
                  {label: 'Add-Student',command: () => this.gotopage('add')}
              ]
          },
      ];
  }

  gotopage(location: string){
    this.router.navigate([location]);
 }

}
