import { Component, OnInit } from '@angular/core';
import { Breweries } from '../breweries'

@Component({
  selector: 'app-brewerylist',
  templateUrl: './brewerylist.component.html',
  styleUrls: ['./brewerylist.component.css']
})
export class BrewerylistComponent implements OnInit {

  breweries = Breweries;
  constructor() { }

  ngOnInit() {
  }

}
