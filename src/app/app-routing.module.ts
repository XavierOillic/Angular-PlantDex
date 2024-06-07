import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageMyPlantsComponent } from './pages/page-my-plants/page-my-plants.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageNewPlantComponent } from './pages/page-new-plant/page-new-plant.component';
import { PageEditPlantComponent } from './pages/page-edit-plant/page-edit-plant.component';
import { PagePlantDetailsComponent } from './pages/page-plant-details/page-plant-details.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  // Set Route for http://localhost:4200 ==> url de base de notre Appli.
  {
    path: '',
    component: PageHomeComponent,
    //canActivate: [AuthGuard],
    //data: { role: [] },
  },
  // Set Route for http://localhost:4200/my-plants ==> pâge my-plants
  {
    path: 'my-plants',
    component: PageMyPlantsComponent,
    canActivate: [AuthGuard],
    data: { role: ['admin', 'registereduser'] },
  },
  // Set Route for http://localhost:4200/admin ==> pâge my-plants
  {
    path: 'admin',
    component: PageAdminComponent,
    canActivate: [AuthGuard],
    data: { role: ['admin', 'registereduser'] },
  },
  {
    path: 'admin/new-plant',
    component: PageNewPlantComponent,
    canActivate: [AuthGuard],
    data: { role: ['admin'] },
  },
  {
    path: 'plants/details/:detailsId',
    component: PagePlantDetailsComponent,
    canActivate: [AuthGuard],
    data: { role: ['user', 'admin', 'registereduser'] },
  },
  {
    path: 'admin/edit-plant/:updateId',
    component: PageEditPlantComponent,
    canActivate: [AuthGuard],
    data: { role: ['admin'] },
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  // Les deux points avant plantIdNb rend cet id dynamique // cet "ID" peut etre BANANE mais il est juste un transport d'une valeur dynamique
  { path: '**', component: PageNotFoundComponent }, // Celle ci doit rester en dernier : " ** " wildcard Page Not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
