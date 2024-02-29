import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-page-new-plant',
  templateUrl: './page-new-plant.component.html',
  styleUrls: ['./page-new-plant.component.css'],
})
export class PageNewPlantComponent {
  constructor(private plantsService: PlantsService, private router: Router) {}
  newPlantSubmitted(plant: Plant) {
    this.plantsService.createNewPlant(plant).subscribe((respBanane) => {
      console.log('New Plant created', respBanane);
      // Notre plante est créee, on peut NAVIGUER (RETOUR) vers la PAGE ADMIN.
      this.router.navigate(['/admin']);
      // Grâce à l'INJECTION de DEPENDANCE  ROUTER et sa méthode NAVIGATE
      // On a ce Navigate qu'avec Router
    });
  }
}
