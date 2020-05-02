import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isNavShowing: boolean = false;
  isShowingbuttonSearchChild: boolean = false;
  constructor() { }

  ngOnInit(): void {

  }

  // زرار البحث المتقدم
  showBtnSearchChild(buttonSearchChild, button) {
    this.isShowingbuttonSearchChild = !this.isShowingbuttonSearchChild;
    if (this.isShowingbuttonSearchChild == true) {
      buttonSearchChild.style.display = 'block';
      button.classList.add('activeBtn');
    } else {
      buttonSearchChild.style.display = 'none';
      button.classList.remove('activeBtn');
    }
  }


  // toggle Navbar
  toggleNav(navbar) {
    this.isNavShowing = !this.isNavShowing;
    let nav = (navbar as HTMLElement);
    if (this.isNavShowing == true) {
      nav.style.right = '0';
    } else {
      nav.style.right = '-100%';
    }
  }


}
