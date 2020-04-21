import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {


  currentIndexImg: number = 0;

  size;
  innerChildNodesLength;
  @ViewChild('innerCarousel', { static: true }) innerCarousel: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.doSlider();
    console.log(this.currentIndexImg)
  }

  doSlider() {
    let inner = (this.innerCarousel.nativeElement as HTMLElement);
    this.size = (inner.childNodes[0] as HTMLElement).clientWidth;
    this.innerChildNodesLength = inner.childNodes.length;
    inner.style.transform = `translateX(${this.size * this.currentIndexImg}px)`;
  }

  prevFn() {
    this.currentIndexImg++
    console.log(this.currentIndexImg)
    if (this.currentIndexImg == this.innerChildNodesLength - 2) {
      this.currentIndexImg = 0;
    }
    this.doSlider()
  }

  nextFn() {
    this.currentIndexImg--
    console.log(this.currentIndexImg)
    if (this.currentIndexImg < 0) {
      this.currentIndexImg = this.innerChildNodesLength - 3;
    }
    this.doSlider()
  }

}
