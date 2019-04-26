import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    customOptions: any = {
      smartSpeed:1000,
      margin:35,
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      autoplay:true,
      nav: true,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        450: {
          items: 1
        },
        678: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    }

    customOptions_slider: any = {
      smartSpeed:1500,
      margin:50,
      loop: true,
      mouseDrag: false,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 100,
      autoplay:true,
      nav: false,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        450: {
          items: 2
        },
        678: {
          items: 3
        },
        1000: {
          items: 4
        }
      }

    }

  constructor() { }


  ngOnInit() {
  }

}
