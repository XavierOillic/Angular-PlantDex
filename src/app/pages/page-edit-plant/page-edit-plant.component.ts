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
  //plantIdNb!: number;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    //console.log('Je suis dans PAGE EDIT : ', routeParams);
    const currentPlantId = Number(routeParams.get('plantIdDetails'));
    console.log('Je suis dans PAGE EDIT CurrentPlantId : ', currentPlantId);

    this.plantsService.getLaPlantDetails(currentPlantId).subscribe({
      next: (respUnePlante) => {
        this.plantEditToDisplay = respUnePlante;
        console.log('Page edit(respUnePlante) ', this.plantEditToDisplay);
      },
      error: () => {},
    });
  }

  plantToEditSubmitted(plant: Plant) {
    this.plantsService
      .modifyPlantService(plant.id, plant)
      .subscribe((respEdition) => {
        console.log('La Plante a été modifiée.', respEdition);
        this.router.navigate(['/admin']);
      });
  }
}
