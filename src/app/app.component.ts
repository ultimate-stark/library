import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'library';


  ngOnInit() {
    window.addEventListener('load', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    })
  }

}
