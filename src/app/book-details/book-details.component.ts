import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

    bookDetails_slider: any = {
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

    purChas_slider: any = {
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
