import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SpeechRecognitionModule as SpeechRecogModule} from '../../project/speech-recognition/src/public_api';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    SpeechRecogModule.withConfig({
      lang: 'ja',

      interimResults: true,
      maxAlternatives: 10,

      onaudiostart:  (ev: Event)                  => console.log('on audio start',  ev),
      onsoundstart:  (ev: Event)                  => console.log('on sound start',  ev),
      onspeechstart: (ev: Event)                  => console.log('on speech start', ev),
      onspeechend:   (ev: Event)                  => console.log('on speech end',   ev),
      onsoundend:    (ev: Event)                  => console.log('on sound end',    ev),
      onaudioend:    (ev: Event)                  => console.log('on audio end',    ev),
      onresult:      (ev: SpeechRecognitionEvent) => console.log('on result',      ev),
      onnomatch:     (ev: SpeechRecognitionEvent) => console.log('on nomatch',     ev),
      onerror:       (ev: SpeechRecognitionError) => console.log('on error',       ev),
      onstart:       (ev: Event)                  => console.log('on start',       ev),
      onend:         (ev: Event)                  => console.log('on end',         ev),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
