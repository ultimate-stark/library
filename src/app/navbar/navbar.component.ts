import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  @ViewChild('viewButtons', { static: true }) viewButtons: ElementRef;
  @ViewChild('viewInput', { static: true }) viewInput: ElementRef;

  isNavShowing: boolean = false;
  constructor() { }

  ngOnInit(): void {

  }


  ngAfterViewInit() {
    let buttons = this.viewButtons.nativeElement.childNodes;
    let input = (this.viewInput.nativeElement as HTMLInputElement);
    console.log(input)
    buttons.forEach(button => {
      let childBtn = button as HTMLElement;
      childBtn.addEventListener('click', () => {
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].classList.remove('activeBtnSearch')
        }
        button.classList.add('activeBtnSearch')
        if (childBtn.classList.contains('activeBtnSearch')) {
          input.setAttribute('placeholder', childBtn.innerHTML)
        }
      })
    })
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
