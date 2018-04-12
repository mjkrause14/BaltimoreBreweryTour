import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsAPIWrapper } from '@agm/core/services/google-maps-api-wrapper';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { BrewerylistComponent } from './brewerylist/brewerylist.component';
import { BreweryDetailComponent } from './brewery-detail/brewery-detail.component';


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
    HttpClientModule
  ],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
