import { Component, LOCALE_ID, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  languageList = [
    { code: 'ta', label: 'தமிழ்' },
    { code: 'en', label: 'Eng' },
    { code: 'hi', label: 'हिंदी' }
  ];

  constructor(@Inject(LOCALE_ID) protected localeId: string) { }

  ngOnInit() {
  }


}


