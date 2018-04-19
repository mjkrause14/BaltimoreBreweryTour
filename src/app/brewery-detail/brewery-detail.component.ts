import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs/observable/of';
import { Location } from '@angular/common';
import { BeerService } from '../beer.service';
import { BreweryService } from '../brewery.service'

@Component({
  selector: 'app-brewery-detail',
  templateUrl: './brewery-detail.component.html',
  styleUrls: ['./brewery-detail.component.css']
})

export class BreweryDetailComponent implements OnInit {

  beers: any;
  brewery: any;

  constructor(private route: ActivatedRoute, private location: Location, private beerService: BeerService, 
    private breweryService: BreweryService) { }

  ngOnInit(): void {
    this.getBeers();
    this.getBrewery();
  }

  getBeers(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.beerService.getBeers(id)
    .subscribe(beers => this.beers = beers);
  }

  getBrewery(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.breweryService.getBrewery(id)
    .subscribe(brewery => this.brewery = brewery[0]);
  }
}
