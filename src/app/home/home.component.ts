import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { BooksService } from '../services/books/books.service';
import { Book } from '../interfaces/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books: Book[];
  panelOpenState = false;
  carouslLength;
  currentIndexImg: number = 0;
  carouselImgs;
  @ViewChild('homeCarousel', { static: true }) homeCarousel: ElementRef;

  constructor(private wowService: NgwWowService, private BookService: BooksService) { }

  ngOnInit(): void {
    this.wowService.init();
    this.getAllBooks();
  }

  getAllBooks() {
    this.books = this.BookService.books;
  }

  ngAfterViewInit() {
    this.carouslLength = (this.homeCarousel.nativeElement as HTMLElement).childNodes.length;
    this.carouselImgs = (this.homeCarousel.nativeElement as HTMLElement).childNodes;
    setInterval(() => {
      this.carouselRightFn()
    }, 8000)
  }

  // Do Slider Function
  doSlider() {
    this.carouselImgs.forEach(element => {
      element.classList.remove('activeHomeCarousel')
    });
    this.carouselImgs[this.currentIndexImg].classList.add('activeHomeCarousel');
  }


  // Go To Left
  carouselLeftFn() {
    this.currentIndexImg--
    if (this.currentIndexImg < 0) {
      this.currentIndexImg = this.carouslLength - 1;
    }
    this.doSlider();
  }

  // Go To Right
  carouselRightFn() {
    this.currentIndexImg++
    if (this.currentIndexImg == this.carouslLength) {
      this.currentIndexImg = 0
    }
    this.doSlider();
  }

}
