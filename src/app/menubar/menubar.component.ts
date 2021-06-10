import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  constructor() { }

  items: MenuItem[] | any;

  ngOnInit() {
      this.items = [
          {
              label: 'CRUD',
              items: [
                  {label: 'Home',url: '/home'},
                  {label: 'Student',url: '/student'},
                  {label: 'Add-Student',url: '/add'}
              ]
          },
      ];
  }

}
