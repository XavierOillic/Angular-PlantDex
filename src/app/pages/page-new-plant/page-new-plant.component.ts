import { Component } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-page-new-plant',
  templateUrl: './page-new-plant.component.html',
  styleUrls: ['./page-new-plant.component.css'],
})
export class PageNewPlantComponent {
  constructor(private plantsService: PlantsService) {}
  newPlantSubmitted(plant: Plant) {
    this.plantsService.createNewPlant(plant).subscribe((respBanane) => {
      console.log('New Plant created', respBanane);
    });
  }
}
