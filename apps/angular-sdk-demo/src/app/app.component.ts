import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { DemoSDK, SDKOptions } from '@demo/sdk';
import React from 'react';
import ReactDOM from 'react-dom/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'angular-sdk-demo';

  @ViewChild('sdkContainer', { static: false })
  sdkContainer!: ElementRef;
  sdkOptions!: SDKOptions;
  isTokenExpired: boolean = false;

  ngOnInit() {
    this.sdkOptions = {
      language: 'en',
      theme: 'light',
      token: 'angular-token',
      onExpiredToken: () => {
        this.isTokenExpired = true;
        console.log('Angular Demo: Token Expired!');
      },
    };
  }

  setLanguage(language: string) {
    this.isTokenExpired = false;
    this.sdkOptions = { ...this.sdkOptions, language };
    this.renderDemoSDK();
  }

  setTheme(theme: string) {
    this.isTokenExpired = false;
    this.sdkOptions = { ...this.sdkOptions, theme };
    this.renderDemoSDK();
  }

  ngAfterViewInit() {
    this.renderDemoSDK();
  }

  private renderDemoSDK() {
    if (this.sdkContainer) {
      const root = ReactDOM.createRoot(this.sdkContainer.nativeElement);
      root.render(React.createElement(DemoSDK, { options: this.sdkOptions }));
    }
  }
}
