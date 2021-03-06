import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Subscription } from 'rxjs';
declare const $;

@Component({
  selector: 'frontend-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss'],
})
export class DashComponent implements OnInit, OnDestroy {
  subscriptions: Subscription = new Subscription()
  year = new Date().getFullYear(); //* Current year for footer
  appVersion = environment.appVersion

  constructor(
    @Inject(DOCUMENT) public document: Document
  ) { }

  ngOnInit(): void {
    //* show loader
    $('#loader').removeClass('loaded')
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }
}
