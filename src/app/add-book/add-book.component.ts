import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit, AfterViewInit {

  mainFile;
  @ViewChild('viewMainFile', { static: false }) viewMainFile: ElementRef;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.mainFile = (this.viewMainFile.nativeElement as HTMLInputElement)

  }

  doFile(viewFile, viewIcon) {
    let file = (viewFile as HTMLElement),
      icon = (viewIcon as HTMLElement);
    this.mainFile.click();
    this.mainFile.addEventListener('change', () => {
      if (this.mainFile.value) {
        file.innerHTML = this.mainFile.value;
        icon.removeAttribute('hidden')
        icon.addEventListener('click', () => {
          this.mainFile.value = '';
          file.innerHTML = 'اختر الصورة';
          icon.setAttribute('hidden', null);
        })
      }
    })
  }

}
