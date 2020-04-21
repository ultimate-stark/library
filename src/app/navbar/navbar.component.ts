import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  isNavShowing: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }


  toggleNav(navbar) {
    this.isNavShowing = !this.isNavShowing;
    let nav = (navbar as HTMLElement);
    console.log(nav.clientWidth)
    if (this.isNavShowing == true) {
      nav.style.right = '0';
    } else {
      nav.style.right = '-100%';
    }
  }


}
