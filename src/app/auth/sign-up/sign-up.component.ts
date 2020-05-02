import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private wowService: NgwWowService) { }

  ngOnInit() {
    this.wowService.init();
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    })
  }

}
