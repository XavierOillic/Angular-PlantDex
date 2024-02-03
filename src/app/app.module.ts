import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageMyPlantsComponent } from './pages/page-my-plants/page-my-plants.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
// A FAIRE POUR CHAQUE PROJET ANGULAR
import {HttpClientModule} from '@angular/common/http';
import { CardPlantComponent } from './components/card-plant/card-plant.component';
import { FilterSideBarComponent } from './components/filter-side-bar/filter-side-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FilterButtonsComponent } from './components/filter-buttons/filter-buttons.component';
import { IconesComponent } from './components/icones/icones.component';
import { LegendComponent } from './components/legend/legend.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageHomeComponent,
    PageAdminComponent,
    PageMyPlantsComponent,
    PageNotFoundComponent,
    CardPlantComponent,
    FilterSideBarComponent,
    SearchBarComponent,
    FilterButtonsComponent,
    IconesComponent,
    LegendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    // A FAIRE POUR CHAQUE PROJET ANGULAR
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
