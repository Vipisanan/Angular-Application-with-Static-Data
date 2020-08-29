import {Component, OnInit} from '@angular/core';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  today = new Date();
  jstoday = '';

  constructor() {
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
    console.log(this.jstoday);
  }

  ngOnInit() {
  }

}
