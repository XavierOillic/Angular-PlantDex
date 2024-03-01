import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageMyPlantsComponent } from './pages/page-my-plants/page-my-plants.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageNewPlantComponent } from './pages/page-new-plant/page-new-plant.component';
import { PageEditPlantComponent } from './pages/page-edit-plant/page-edit-plant.component';
import { PagePlantDetailsComponent } from './pages/page-plant-details/page-plant-details.component';

const routes: Routes = [
  // Set Route for http://localhost:4200 ==> url de base de notre Appli.
  { path: '', component: PageHomeComponent },
  // Set Route for http://localhost:4200/my-plants ==> pâge my-plants
  { path: 'my-plants', component: PageMyPlantsComponent },
  // Set Route for http://localhost:4200/admin ==> pâge my-plants
  { path: 'admin', component: PageAdminComponent },
  { path: 'admin/new-plant', component: PageNewPlantComponent },
  { path: 'admin/edit-plant/:plantIdEdit', component: PageEditPlantComponent },
  // Set Route for http://localhost:4200/admin/edit)plant/l'id de la plante ==> page edit plant
  { path: 'plants/details/:id', component: PagePlantDetailsComponent },
  // Les deux points avant id rend cet id dynamique // cet "ID" peut etre BANANE mais il est juste un transport d'une valeur dynamique
  { path: '**', component: PageNotFoundComponent }, // Celle ci doit rester en dernier !
  // Set Route for http://localhost:4200/page-not-found ==> page not found, POSSIBLE grâce au WildCard **
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
