import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'edulingo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    //* hide loader
    $('#loader').addClass('loaded')
  }
}
