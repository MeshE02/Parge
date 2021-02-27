import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import 'here-js-api/scripts/mapsjs-core';
import 'here-js-api/scripts/mapsjs-service';
import 'here-js-api/scripts/mapsjs-ui';
import 'here-js-api/scripts/mapsjs-mapevents';
import 'here-js-api/scripts/mapsjs-clustering';

declare var H: any;

@Component({
  selector: 'app-gmaps',
  templateUrl: './gmaps.component.html',
  styleUrls: ['./gmaps.component.scss']
})
export class GmapsComponent implements OnInit {

  private platform: any;
  @ViewChild("map")
  public mapElement: ElementRef;

  private _apikey: any;

  public lat: any;

  public lng: any;

  public width: any;

  public height: any;

  public constructor() { }

  public ngOnInit() { }

  public ngAfterViewInit() {
      let platform = new H.service.Platform({
          "apikey": "063KrRtrIN6pMDlDgMtXKrqZ1pWX9CuAwUNBm9kONkg"
      });
      let defaultLayers = platform.createDefaultLayers();
      let map = new H.Map(
          this.mapElement.nativeElement,
          defaultLayers.vector.normal.map,
          {
              zoom: 10,
              center: { lat: "51.263405", lng: "6.551713" }
          },
      defaultLayers.vector.normal.map.getProvider().setStyle(
            new H.map.Style('https://js.api.here.com/v3/3.1/styles/omv/normal.day.yaml')
          )
      );
  }
}
