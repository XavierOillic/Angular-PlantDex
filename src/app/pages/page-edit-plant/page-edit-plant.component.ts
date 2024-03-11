import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-page-edit-plant',
  templateUrl: './page-edit-plant.component.html',
  styleUrls: ['./page-edit-plant.component.css'],
})
export class PageEditPlantComponent implements OnInit {
  constructor(
    private plantsService: PlantsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  plantEditToDisplay!: Plant;
  plantId!: number;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    //console.log('Je suis dans PAGE EDIT : ', routeParams);
    const currentPlantId: number = Number(routeParams.get('updateId'));
    console.log('Je suis dans PAGE EDIT CurrentPlantId : ', currentPlantId);

    this.plantsService
      .getLaPlantDetails(currentPlantId)
      .subscribe((respUnePlante) => {
        console.log('Données de plante chargées. PAGE-EDIT', respUnePlante.id);
        this.plantEditToDisplay = respUnePlante;
      });
  }

  plantToEditSubmitted(plant: Plant) {
    this.plantsService
      .modifyPlantService(plant.id, plant)
      .subscribe((respEdition) => {
        //Le subscribe me fait attendre la réponse du server
        console.log('La Plante a été modifiée pour Edit.', respEdition);
        this.router.navigate(['/admin']);
        // une fois que j'ai la réponse, je navigue vers la page admin.
      });
  }
}

/*
this.plantsService.getLaPlantDetails(currentPlantId).subscribe({
      next: (respUnePlante) => {
        console.log('Les données de plante sont chargées. ', respUnePlante);
        this.plantEditToDisplay = respUnePlante;
      },
      error: () => {},
    });
*/
