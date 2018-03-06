import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import {PageComponent} from '../config/page.config';
import {RouterConfig} from '../config/router.config';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    RouterConfig
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
