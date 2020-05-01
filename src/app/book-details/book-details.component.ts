import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {


  // كتب ذات مخطوطات
  booksWithPlan = [
    {
      img: "../../assets/imgs/2.jpg",
      name: "اسم الكتاب",
      auther: "المؤلف",
      bookDetails: "اشتهر شهرة واسعة في النطاق العربي حيث غير كل المفاهيم عن الكتب العامة في ذلك الحين"
    },
    {
      img: "../../assets/imgs/1.jpg",
      name: "اسم الكتاب",
      auther: "المؤلف",
      bookDetails: "اشتهر شهرة واسعة في النطاق العربي حيث غير كل المفاهيم عن الكتب العامة في ذلك الحين"
    },
    {
      img: "../../assets/imgs/3.jpg",
      name: "اسم الكتاب",
      auther: "المؤلف",
      bookDetails: "اشتهر شهرة واسعة في النطاق العربي حيث غير كل المفاهيم عن الكتب العامة في ذلك الحين"
    },
    {
      img: "../../assets/imgs/4.jpg",
      name: "اسم الكتاب",
      auther: "المؤلف",
      bookDetails: "اشتهر شهرة واسعة في النطاق العربي حيث غير كل المفاهيم عن الكتب العامة في ذلك الحين"
    }
  ]

  // كتب ذات اضافات
  booksWithAdditions = [
    {
      img: "../../assets/imgs/5.jpg",
      name: "اسم الكتاب",
      auther: "المؤلف",
      bookDetails: "اشتهر شهرة واسعة في النطاق العربي حيث غير كل المفاهيم عن الكتب العامة في ذلك الحين"
    },
    {
      img: "../../assets/imgs/6.jpg",
      name: "اسم الكتاب",
      auther: "المؤلف",
      bookDetails: "اشتهر شهرة واسعة في النطاق العربي حيث غير كل المفاهيم عن الكتب العامة في ذلك الحين"
    },
    {
      img: "../../assets/imgs/7.jpg",
      name: "اسم الكتاب",
      auther: "المؤلف",
      bookDetails: "اشتهر شهرة واسعة في النطاق العربي حيث غير كل المفاهيم عن الكتب العامة في ذلك الحين"
    },
    {
      img: "../../assets/imgs/8.jpg",
      name: "اسم الكتاب",
      auther: "المؤلف",
      bookDetails: "اشتهر شهرة واسعة في النطاق العربي حيث غير كل المفاهيم عن الكتب العامة في ذلك الحين"
    }
  ]

  isMute: boolean = false;

  // التسجيلات الصوتية
  audios = [
    {
      audioName: "سندباد بابلو",
      audioSrc: "../../assets/audio/MARWAN PABLO - SINdBAD (Official Video Clip) _ (مر(MP3_160K).mp3",
      audio: new Audio(),
      totalMin: `00`,
      currentMin: `00`,
      totalSec: `00`,
      currentSec: `00`
    },
    {
      audioName: "مروان بابلو لو (لو تتجنن تبقى فري)",
      audioSrc: "../../assets/audio/MARWAN PABLO x MOLOTOF - FREE (Official Music Vide(MP3_160K).mp3",
      audio: new Audio(),
      totalMin: `00`,
      currentMin: `00`,
      totalSec: `00`,
      currentSec: `00`
    },
    {
      audioName: "ويجز على راحتي",
      audioSrc: "../../assets/audio/Wegz - 3la Ra7ty _ ويجز - علي راحتي prod. DJ Totti(MP3_160K).mp3",
      audio: new Audio(),
      totalMin: `00`,
      currentMin: `00`,
      totalSec: `00`,
      currentSec: `00`
    }
  ];

  currentMin;

  @ViewChild('viewAudios', { static: true }) viewAudios: ElementRef;

  constructor(private wowService: NgwWowService) { }

  ngOnInit(): void {
    this.wowService.init();
    window.addEventListener('load', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    })
    // Set Source To Song
    for (let i = 0; i < this.audios.length; i++) {
      this.audios[i].audio.src = this.audios[i].audioSrc;
      this.audios[i].audio.addEventListener('loadedmetadata', () => {
        this.getAudioTime(i)
      })
    }

  }

  // Toggle Play And Pause
  togglePlayAndPause(i: number, playAndPause: HTMLElement) {
    if (this.audios[i].audio.paused) {
      playAndPause.classList.replace('fa-play', 'fa-pause');
      this.audios[i].audio.play();
      // Line Fn
      this.timeUpdate(i, playAndPause);
    } else {
      playAndPause.classList.replace('fa-pause', 'fa-play');
      this.audios[i].audio.pause();
    }
  }

  // Toggle Volume
  toggleVolume(volume: HTMLElement, i: number) {
    this.isMute = !this.isMute;
    if (this.isMute == true) {
      volume.classList.replace('fa-volume-up', 'fa-volume-mute');
      this.audios[i].audio.muted = true;
    } else {
      volume.classList.replace('fa-volume-mute', 'fa-volume-up')
      this.audios[i].audio.muted = false;
    }

  }


  // Get Audio Time
  getAudioTime(i: number) {
    this.audios[i].currentMin = this.smartTime(Math.floor(this.audios[i].audio.currentTime / 60));
    this.audios[i].totalMin = this.smartTime(Math.floor(this.audios[i].audio.duration / 60));

    // Seceonds
    this.audios[i].currentSec = this.smartTime(Math.floor(this.audios[i].audio.currentTime % 60));
    this.audios[i].totalSec = this.smartTime(Math.floor(this.audios[i].audio.duration % 60));
  }

  // Time Update

  timeUpdate(i: number, playAndPause: HTMLElement) {
    // Update Time
    this.audios[i].audio.addEventListener('timeupdate', () => {
      this.getAudioTime(i)
      if (this.audios[i].audio.ended) {
        playAndPause.classList.replace('fa-pause', 'fa-play');
      }
    })

    // Update Line Moving



  }

  smartTime(time) {
    return time < 10 ? "0" + time.toString().trim() : time
  }

  // Update Volume
  updateVolume(volume, i) {
    this.audios[i].audio.volume = volume.value / 100;
  }


}
