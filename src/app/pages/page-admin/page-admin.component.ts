import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css'],
})
export class PageAdminComponent implements OnInit {
  constructor(private plantsService: PlantsService) {}
  // C'est ICI QUE JE FAIS L'INJECTION DE DEPENDANCES pour utiliser les services de PLantsServices.

  plantsToAdmin: Plant[] = []; // JE déclare mon tableau TYPÉ  à vide

  ngOnInit(): void {
    this.plantsService.getLaPlants().subscribe((dataPLantJeChoisi) => {
      console.log(dataPLantJeChoisi);
      this.plantsToAdmin = [...dataPLantJeChoisi]; // Je lui met les données dedans, que je reçois grâce à plantservice.
    });
  }
}
