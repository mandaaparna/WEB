import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighestScore } from './app.score.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    HighestScore
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
