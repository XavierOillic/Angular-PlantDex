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
import { HttpClientModule } from '@angular/common/http';
import { CardPlantComponent } from './components/card-plant/card-plant.component';
import { FilterSideBarComponent } from './components/filter-side-bar/filter-side-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FilterButtonsComponent } from './components/filter-buttons/filter-buttons.component';
import { IconesComponent } from './components/icones/icones.component';
import { LegendComponent } from './components/legend/legend.component';
import { AdminFormComponent } from './components/admin-form/admin-form.component';
import { PageNewPlantComponent } from './pages/page-new-plant/page-new-plant.component';
import { PageEditPlantComponent } from './pages/page-edit-plant/page-edit-plant.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminUpdateComponent } from './components/admin-update/admin-update.component';
import { PagePlantDetailsComponent } from './pages/page-plant-details/page-plant-details.component';

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
    AdminFormComponent,
    PageNewPlantComponent,
    PageEditPlantComponent,
    AdminUpdateComponent,
    PagePlantDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // A FAIRE POUR CHAQUE PROJET ANGULAR
    HttpClientModule,
    ReactiveFormsModule,
    // A Mettre absolument si on a besoin de faire des formulaire.
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
