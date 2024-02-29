import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-page-plant-details',
  templateUrl: './page-plant-details.component.html',
  styleUrls: ['./page-plant-details.component.css'],
})
export class PagePlantDetailsComponent implements OnInit {
  constructor(private plantsService: PlantsService) {}

  plantDetails!: Plant;

  ngOnInit(): void {
    /*this.plantsService.getLaPlantDetails().subscribe((detailsDisplayed) => {
      console.log('Affichage dans plant details : ', detailsDisplayed);
      this.plantDetails = detailsDisplayed;
    });*/
  }
}
