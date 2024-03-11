import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-page-plant-details',
  templateUrl: './page-plant-details.component.html',
  styleUrls: ['./page-plant-details.component.css'],
})
export class PagePlantDetailsComponent implements OnInit {
  constructor(
    private plantsService: PlantsService,
    private route: ActivatedRoute
  ) {}

  plantDetails!: Plant;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    //console.log('Affichage dans plant details : ', routeParams);
    const plantIdFromRoute = Number(routeParams.get('plantIdDetails'));
    // ce qui est entre les parentheses est convertit en NUMBER, pour matcher avec l'id
    console.log('Affichage dans plant details : ', plantIdFromRoute);

    this.plantsService.getLaPlantDetails(plantIdFromRoute).subscribe({
      next: (responseForDetails) => {
        console.log('Les données de plante sont chargées.', responseForDetails);
        this.plantDetails = responseForDetails;
      },
      error: () => {},
    });
  }
}
