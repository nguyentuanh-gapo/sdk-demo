import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { initGapoSDK, Widget } from '@gapo/sdk';
import React from 'react';
import ReactDOM from 'react-dom/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'angular-sdk-demo';

  @ViewChild('sdkWidgetContainer', { static: false })
  sdkWidgetContainer!: ElementRef;

  ngOnInit() {
    initGapoSDK({
      language: 'en',
      theme: 'light',
      token: 'angular-token',
    });
  }

  ngAfterViewInit() {
    if (this.sdkWidgetContainer) {
      const root = ReactDOM.createRoot(this.sdkWidgetContainer.nativeElement);
      root.render(React.createElement(Widget));
    }
  }
}
