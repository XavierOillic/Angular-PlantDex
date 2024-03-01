import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute
  ) {}

  plantToEdit!: Plant;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    console.log('Je suis dans PAGE EDIT : ', routeParams);
    const plantIdFromRoute: number = Number(routeParams.get('id'));
    console.log('Je suis dans PAGE EDIT : ', plantIdFromRoute);

    this.plantsService.getLaPlantDetails(plantIdFromRoute).subscribe({
      next: (responseForEdit) => {
        this.plantToEdit = responseForEdit;
        console.log(this.plantToEdit);
      },
      error: () => {},
    });
  }
}
