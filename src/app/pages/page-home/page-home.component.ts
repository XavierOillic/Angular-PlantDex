import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {
  isDivDisplayed = false;
  plantsToDisplay : Plant[] = []; // On initialise le tableau avec un tableau vide.

  constructor(private plantsService: PlantsService) {}

  displayDiv (){
     this.isDivDisplayed = !this.isDivDisplayed;
  }

  ngOnInit(): void {
      this.plantsService.getLaPlants().subscribe((dataPLantJeChoisi) => {
      console.log(dataPLantJeChoisi); // Je stocke dans ce dataPlant les données de la BDD simulée.
      // LE SUBSCRIBE remplace le FETCH !
      this.plantsToDisplay = [...dataPLantJeChoisi];
    });
  }

}
