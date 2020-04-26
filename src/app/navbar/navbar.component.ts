import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('aboutSearch', { static: true }) aboutSearch: ElementRef;

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


  // اظهار نتائج البحث
  showAboutSearch(aboutSearch, e) {
    let search = (aboutSearch as HTMLElement),
      input = (e.target as HTMLInputElement);
    if (input.value == '') {
      search.style.display = 'none';
    } else {
      search.style.display = 'block';
    }
  }


  // toggle Navbar
  toggleNav(navbar) {
    this.isNavShowing = !this.isNavShowing;
    let nav = (navbar as HTMLElement);
    console.log(nav.clientWidth);
    if (this.isNavShowing == true) {
      nav.style.right = '0';
    } else {
      nav.style.right = '-100%';
      this.aboutSearch.nativeElement.style.display = 'none';
    }
  }


}
