import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as $ from 'jquery';
import {
  SpeechRecognitionLang as SpeechRecogLanguage,
  SpeechRecognitionMaxAlternatives as SpeechRecogMaxAlternatives,
  SpeechRecognitionService as SpeechRecogService,
} from '../../project/speech-recognition/src/public_api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: SpeechRecogLanguage,
      useValue: 'en-US',
    },
    {
      provide: SpeechRecogMaxAlternatives,
      useValue: 1,
    },
    SpeechRecogService,
  ],
})
export class AppComponent  {
  title = 'Quick Search';
  res;
  show_data = false;
  show_desc = false;
  show_url = false;
  result = {name :'', img_url:'',type_res:'', description_res:'', detailed_desc:'', url_res:''};
  api_key = '';
  search_val = '';
  @ViewChild('search_criteria') search_crit: ElementRef;
  @ViewChild('search_btn') search_btn: ElementRef;
  public started = false;

  public message = '';
  public input = '';
  constructor(private service: SpeechRecogService,private _http: HttpClient) {
    console.log('SubComponent', this.service);

    this.service.onstart = (e) => {
      console.log('onstart');
    };
    this.service.onresult = (e) => {
      this.message = e.results[0].item(0).transcript;
      console.log('SubComponent:onresult', this.message, e);
      this.input = this.message;
      this.overlayOff();
      this.search_btn.nativeElement.click();
    };
  }
  getResult() {
    // @ts-ignore
    this.result = [];
    this.result.name = '';
    this.result.img_url = '';
    this.result.type_res = '';
    this.result.description_res = '';
    this.result.detailed_desc = '';
    this.result.url_res = '';
     this.search_val = this.search_crit.nativeElement.value;
    this.api_key = 'AIzaSyA1p5bsV8v049FZ2N9zGr1MGRRbHQcO99Q';
    if(this.search_val){
    console.log('https://kgsearch.googleapis.com/v1/entities:search?query='+this.search_val+'&key='+this.api_key+'&limit=1&indent=True');
    this._http.get('https://kgsearch.googleapis.com/v1/entities:search?query='+this.search_val+'&key='+this.api_key+'&limit=1&indent=True')
      .subscribe((data: any) => {
        console.log(data);

        console.log(this.search_val)
        if(data.itemListElement.length>0 && this.search_val !== '') {
          this.show_data = true;
          this.res = data.itemListElement[0].result;
          this.result.name = this.res['name'];
          this.result.type_res = this.res['@type'][0];
          this.result.description_res = this.res['description'];
          this.result.url_res = this.res['url'];
          if(this.res.image != undefined && this.res.image)
          {
            this.result.img_url = this.res.image.contentUrl;
          }
          if(this.res['detailedDescription'] != undefined && this.res['detailedDescription'])
          {
            this.result.detailed_desc = this.res['detailedDescription'].articleBody;
            this.show_desc = true;
          }
          else {
            this.show_desc = false;
          }
          console.log(this.result);
        }
        else {
          this.show_data = false;
        }

        }
      );
  } else {
      this.show_data = false;
    }
  }

  overlayOn() {
    $('.overlay').toggle(function() {
      setTimeout(function () {
        $('#text').html('Listening...');
      }, 1000);
    });
    this.started = true;
    this.service.start();
  }
  overlayOff() {
    $('.overlay').hide();
    $('#text').html('Speak now');
    this.started = false;
    this.service.stop();
  }

  start() {
    this.started = true;
    this.service.start();
  }

  stop() {
    this.started = false;
    this.service.stop();
  }
}
