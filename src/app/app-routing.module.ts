import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreweryDetailComponent } from './brewery-detail/brewery-detail.component';
import { BrewerylistComponent } from './brewerylist/brewerylist.component'

export const routes: Routes = [
  { path: 'home', component: BrewerylistComponent},
  { path: 'brewdetail/:id', component: BreweryDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
