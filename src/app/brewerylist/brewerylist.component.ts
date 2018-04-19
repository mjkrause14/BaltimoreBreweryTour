import { Component, ElementRef, OnInit, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { AgmMap, MapsAPILoader, GoogleMapsAPIWrapper } from '@agm/core';
import { BreweryService } from '../brewery.service';
import { LatLng } from '../latlng';
declare let google: any;

@Component({
  selector: 'app-brewerylist',
  templateUrl: './brewerylist.component.html',
  styleUrls: ['./brewerylist.component.css']
})
export class BrewerylistComponent implements OnInit {

  title = 'Baltimore Beer Map';

  public latitude: number;
  public longitude: number;
  public zoom: number;
  public infoWindow;
  public center;
  public brewLatLng: LatLng;
  public brewId;
  public brewLat;
  public brewLng;

  map: AgmMap;
  latLng: LatLng[] = [];
  breweries: any;
 
  constructor(private breweryService: BreweryService, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }

  ngOnInit() {
    this.getBreweries();
    this.zoom = 10;
    this.latitude = 39.299236;
    this.longitude = -76.609383;
  }

  getBreweries(): void {
    this.breweryService.getBreweries()
    .subscribe(breweries => {
      this.breweries = breweries
      this.getLatLng(breweries);
    });
  }

  getLatLng(breweries): void {
    for(let x in breweries) {
      this.brewLatLng = {
        id: breweries[x].brewery_id,
        latitude: breweries[x].latitude,
        longitude: breweries[x].longitude
      }
      this.latLng.push(this.brewLatLng);
    }
  }
}
