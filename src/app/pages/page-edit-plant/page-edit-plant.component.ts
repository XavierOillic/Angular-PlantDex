import { Component } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-page-edit-plant',
  templateUrl: './page-edit-plant.component.html',
  styleUrls: ['./page-edit-plant.component.css'],
})
export class PageEditPlantComponent {
  blablabla($event: any) {
    throw new Error('Method not implemented.');
  }
  constructor(plantsService: PlantsService) {}

  //modifyPlant(plantAmodifier: Event) {}
}
