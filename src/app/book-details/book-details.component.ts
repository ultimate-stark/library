import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {


  imgWidth: number;
  currentIndexImg: number = 0;
  margin: number = 20;
  size: number = this.imgWidth + this.margin;
  innerChildNodesLength: number;
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
    this.imgWidth = (inner.childNodes[0] as HTMLElement).clientWidth;
    this.size = this.imgWidth + this.margin;
    this.innerChildNodesLength = inner.childNodes.length;
    inner.style.transform = `translateX(${this.size * this.currentIndexImg}px)`;
  }

  // Previous Fn
  prevFn() {
    this.currentIndexImg++
    console.log(this.currentIndexImg)

    // to get the index of current img you want to show (get imgs length - 1)
    if (this.currentIndexImg == this.innerChildNodesLength - 6) {
      this.currentIndexImg = 0;
      console.log('yes')
    }
    this.doSlider()
  }

  // Next Fn
  nextFn() {
    this.currentIndexImg--
    console.log(this.currentIndexImg)
    // to get the index of current img you want to show (get imgs length - 1)
    if (this.currentIndexImg < 0) {
      this.currentIndexImg = this.innerChildNodesLength - 7;
      console.log('asdas', this.currentIndexImg)
    }
    this.doSlider()
  }

}
