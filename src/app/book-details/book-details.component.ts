import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

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
  constructor(private wowService: NgwWowService) { }

  ngOnInit(): void {
    this.wowService.init()
  }
  ngAfterViewInit() {
    this.doSlider();
    this.intervalFn();
  }

  intervalFn() {
    setInterval(() => {
      this.prevFn()
    }, 8000);
  }

  // Make the slider
  doSlider() {
    let inner = (this.innerCarousel.nativeElement as HTMLElement);
    this.size = (inner.childNodes[0] as HTMLElement).clientWidth;
    this.innerChildNodesLength = inner.childNodes.length;
    inner.style.transform = `translateX(${this.size * this.currentIndexImg}px)`;
  }

  // Previous Fn
  prevFn() {
    this.currentIndexImg++
    if (this.currentIndexImg == this.innerChildNodesLength - 2) {
      this.currentIndexImg = 0;
    }
    this.doSlider()
  }

  // Next Fn
  nextFn() {
    this.currentIndexImg--
    console.log(this.currentIndexImg)
    if (this.currentIndexImg < 0) {
      this.currentIndexImg = this.innerChildNodesLength - 3;
    }
    this.doSlider()
  }

}
