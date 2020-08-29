import {Component, OnInit} from '@angular/core';

declare function showAndHide(): any;

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    showAndHide();
  }

}
