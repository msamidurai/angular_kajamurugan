import { Component, OnInit } from '@angular/core';
import * as Books from 'src/assets/js/books1.js';

declare var Books:any;

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Books.init();
  }

}

