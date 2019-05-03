import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor() { }

  searchQuery: string;

  ngOnInit() {
  }

  search(location: string) {
    window.location.href = `/${location}/`;
  }

}
