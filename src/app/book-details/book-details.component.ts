import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {


  isMute: boolean = false;
  songs = [
    {
      songName: "سندباد بابلو",
      songSrc: "../../assets/audio/MARWAN PABLO - SINdBAD (Official Video Clip) _ (مر(MP3_160K).mp3",
      song: new Audio(),
      totalMin: `00`,
      currentMin: `00`,
      totalSec: `00`,
      currentSec: `00`
    },
    {
      songName: "مروان بابلو لو (لو تتجنن تبقى فري)",
      songSrc: "../../assets/audio/MARWAN PABLO x MOLOTOF - FREE (Official Music Vide(MP3_160K).mp3",
      song: new Audio(),
      totalMin: `00`,
      currentMin: `00`,
      totalSec: `00`,
      currentSec: `00`
    },
    {
      songName: "ويجز على راحتي",
      songSrc: "../../assets/audio/Wegz - 3la Ra7ty _ ويجز - علي راحتي prod. DJ Totti(MP3_160K).mp3",
      song: new Audio(),
      totalMin: `00`,
      currentMin: `00`,
      totalSec: `00`,
      currentSec: `00`
    }
  ];


  @ViewChild('audios', { static: true }) audios: ElementRef;

  constructor(private wowService: NgwWowService) { }

  ngOnInit(): void {
    this.wowService.init();
    // Set Source To Song
    for (let i = 0; i < this.songs.length; i++) {
      this.songs[i].song.src = this.songs[i].songSrc;
    }
  }

  // Toggle Play And Pause
  togglePlayAndPause(i: number, line, overline: HTMLElement, playAndPause: HTMLElement) {
    if (this.songs[i].song.paused) {
      playAndPause.classList.replace('fa-play', 'fa-pause');
      this.songs[i].song.play();
      // Line Fn
      this.timeUpdate(i, line, overline, playAndPause);
    } else {
      playAndPause.classList.replace('fa-pause', 'fa-play');
      this.songs[i].song.pause();
    }
  }

  // Toggle Volume
  toggleVolume(volume: HTMLElement, i: number) {
    this.isMute = !this.isMute;
    if (this.isMute == true) {
      volume.classList.replace('fa-volume-up', 'fa-volume-mute');
      this.songs[i].song.muted = true;
    } else {
      volume.classList.replace('fa-volume-mute', 'fa-volume-up')
      this.songs[i].song.muted = false;
    }

  }


  // Time Update

  timeUpdate(i: number, line, overline: HTMLElement, playAndPause: HTMLElement) {

    // Update Line
    this.songs[i].song.addEventListener('timeupdate', () => {
      overline.style.width = (this.songs[i].song.currentTime / this.songs[i].song.duration * 100) + '%';
    })

    // Update Time
    this.songs[i].song.addEventListener('timeupdate', () => {
      // Minutes
      this.songs[i].currentMin = this.smartTime(Math.floor(this.songs[i].song.currentTime / 60));
      this.songs[i].totalMin = this.smartTime(Math.floor(this.songs[i].song.duration / 60));

      // Seceonds
      this.songs[i].currentSec = this.smartTime(Math.floor(this.songs[i].song.currentTime % 60));
      this.songs[i].totalSec = this.smartTime(Math.floor(this.songs[i].song.duration % 60));

      if (this.songs[i].song.ended) {
        playAndPause.classList.replace('fa-pause', 'fa-play');
      }
    })

    // Update Line Moving

    // line.addEventListener('mousedown', (e) => {
    //   let clickedPosition = (e.clientX - e.target.offsetLeft);
    //   this.songs[i].song.currentTime = (clickedPosition / e.target.offsetWidth) * this.songs[i].song.duration;
    // })







  }

  smartTime(time) {
    return time < 10 ? "0" + time.toString().trim() : time
  }









  // Time Update Function
  // timeUpdate() {

  //   this.line.nativeElement.addEventListener('mousedown', (e) => {
  //     let clickedPosition = (e.clientX - e.target.offsetLeft);
  //     console.log('clickedPosition', clickedPosition)
  //     console.log('e.clientX', e.clientX)
  //     console.log('offsetLeft', e.target.offsetLeft)
  //     console.log('offsetWidth', e.target.offsetWidth)
  //     console.log('width', clickedPosition - e.target.offsetWidth)
  //     // console.log('time', (clickedPosition / e.target.offsetWidth * 100))
  //     // this.song.currentTime = (clickedPosition / e.target.offsetWidth);
  //   })
  // }


  // Mute Or No Mute

  // muteOrUnMute(volume) {
  //   this.isMute = !this.isMute;
  //   if (this.isMute == true) {
  //     volume.classList.replace('fa-volume-up', 'fa-volume-mute');
  //     this.song.muted = true;
  //   } else {
  //     this.song.muted = false;
  //     volume.classList.replace('fa-volume-mute', 'fa-volume-up')
  //   }
  // }





}
