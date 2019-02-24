import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {
  @ViewChild('recipe') recipes: ElementRef;
  @ViewChild('place') places: ElementRef;
  recipeValue: any;
  placeValue: any;
  venueList = [];
  recipeList = [];
  url = '';

  currentLat: any;
  currentLong: any;
  geolocationPosition: any;


  constructor(private _http: HttpClient) {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.geolocationPosition = position;
        this.currentLat= position.coords.latitude;
        console.log(this.currentLat);
        this.currentLong= position.coords.longitude;

      });


  }
  getInit()
  {
    this.recipeValue = this.recipes.nativeElement.value;
    if(this.recipeValue=='')
    {
      this.recipeValue='food';
    }
    this._http.get("https://api.foursquare.com/v2/venues/search" +
      "?client_id=3PPNMTIKJJNDVYPFOBGSHHV2PR5A2P05PYHXDN2MKSKTTBSX" +
      "&client_secret=0QPHT0F5RS043F4TB4KKPQSHKSAXKE5ZNOYGB5KL2MBDYAG4" +
      "&v=20160215&limit=5" +
      "&ll=" + this.currentLat +','+this.currentLong+
      "&query=" + this.recipeValue)
      .subscribe((data: any) => {
        for (var i = 0; i < data.response.venues.length; i++) {
          this.venueList[i] = {
            "name": data.response.venues[i].name,
            "id": data.response.venues[i].id,
            "location": data.response.venues[i].location
          };
          console.log(this.venueList[i]);

        }

      })

  }

  ngOnInit() {



    }

  getVenues() {
    console.log(this.currentLat);
    this.recipeValue = this.recipes.nativeElement.value;
    this.placeValue = this.places.nativeElement.value;

    if(this.recipeValue=='')
    {
      this.recipeValue='food';
    }

    if (this.placeValue != null && this.placeValue != "" && this.recipeValue != null && this.recipeValue != "") {
      this._http.get("https://api.foursquare.com/v2/venues/search" +
        "?client_id=3PPNMTIKJJNDVYPFOBGSHHV2PR5A2P05PYHXDN2MKSKTTBSX" +
        "&client_secret=0QPHT0F5RS043F4TB4KKPQSHKSAXKE5ZNOYGB5KL2MBDYAG4" +
        "&v=20160215&limit=5" +
        "&near=" + this.placeValue +
        "&query=" + this.recipeValue)
        .subscribe((data: any) => {
            for (var i = 0; i < data.response.venues.length; i++) {
            this.venueList[i] = {
              "name": data.response.venues[i].name,
              "id": data.response.venues[i].id,
              "location": data.response.venues[i].location
            };
              console.log(this.venueList[i]);

            }

        })
    }
  }
}
