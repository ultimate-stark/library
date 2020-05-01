import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private wowService: NgwWowService) { }

  ngOnInit() {
    this.wowService.init();

  }

}
