import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsAPIWrapper } from '@agm/core/services/google-maps-api-wrapper';
import { RouterModule } from '@angular/router';

import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { BrewerylistComponent } from './brewerylist/brewerylist.component';
import { BreweryDetailComponent } from './brewery-detail/brewery-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { BeerService } from './beer.service';
import { BreweryService } from './brewery.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    BrewerylistComponent,
    BreweryDetailComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyC4w-wqdush35lnrtAVDGnN0DFmEnbNg30",
      libraries: ["places"]
    }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [GoogleMapsAPIWrapper, BeerService, BreweryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
