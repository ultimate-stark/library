import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ThemeService } from '../services/theme.service';
@Component({
  selector: 'app-change-themes',
  templateUrl: './change-themes.component.html',
  styleUrls: ['./change-themes.component.scss']
})

export class ChangeThemesComponent implements OnInit {

  isShow: boolean = false;
  @ViewChild('viewBoxs', { static: true }) viewBoxs: ElementRef

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.toggleClassForSpinner();
  }


  // Toggle Class For Spinner
  toggleClassForSpinner() {
    let boxs = this.viewBoxs.nativeElement.childNodes;
    boxs.forEach(box => {
      box.addEventListener('click', () => {
        for (let i = 0; i < boxs.length; i++) {
          boxs[i].classList.remove('activeBox')
        }
        box.classList.add('activeBox');
      })
    })
  }

  // Toggle Spinn
  toggleColorSpin(colorBox) {
    this.isShow = !this.isShow;
    if (this.isShow == true) {
      (colorBox as HTMLElement).style.transform = 'translateX(0)';
      (colorBox as HTMLElement).style.boxShadow = '-4px 4px 8px #d7d7d7';
    } else {
      (colorBox as HTMLElement).style.transform = 'translateX(100%)';
      (colorBox as HTMLElement).style.boxShadow = '0px 0px 0px #d7d7d7';
    }
  }

  // Set Color's
  setBlueTheme() {
    this.themeService.setBlueTheme();
    localStorage.setItem('blueTheme', this.themeService.getActiveTheme().name)
  }

  setRedTheme() {
    this.themeService.setRedTheme();
    localStorage.setItem('redTheme', this.themeService.getActiveTheme().name)
  }

  setGreenTheme() {
    this.themeService.setGreenTheme()
    localStorage.setItem('greenTheme', this.themeService.getActiveTheme().name)
  }

  setPurpleTheme() {
    this.themeService.setPurpleTheme()
    localStorage.setItem('purpleTheme', this.themeService.getActiveTheme().name)
  }


}
