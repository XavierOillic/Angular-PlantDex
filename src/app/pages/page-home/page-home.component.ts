import { Component, OnInit } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {
  isDivDisplayed = false;
  
  plantsToDisplay : Plant[] = []; // On initialise le tableau avec un tableau vide.
  monTitle= "Test d'Affichage InfoBulle";

  constructor(private plantsService: PlantsService) {}

  displayDiv (){
     this.isDivDisplayed = !this.isDivDisplayed; // faire apparaitre et disparaitre la div noire sous le bandeau de nav
  }

  ngOnInit(): void {
      this.plantsService.getLaPlants().subscribe((dataPLantJeChoisi) => {
      console.log(dataPLantJeChoisi); // Je stocke dans ce dataPlant les données de la BDD simulée.
      // LE SUBSCRIBE remplace le THEN ! et la partie avant le FETCH.
      this.plantsToDisplay = [...dataPLantJeChoisi];
    });
  }

}
