import { Component, OnInit, Output } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  plantsToDisplay : Plant[] = []; // On initialise le tableau avec un tableau vide.
  monTitle= "Test d'Affichage InfoBulle";

  arrPlant = [];
  
  constructor(private plantsService: PlantsService) {}

   transmitSearch(receivedSearchPlant: any){
    console.log(receivedSearchPlant);
    console.log(this.plantsToDisplay);

    let searchPlant: string = receivedSearchPlant;

    let tabFiltre: any | [];
    tabFiltre = this.plantsToDisplay;

    this.plantsToDisplay = this.plantsToDisplay.filter((Plant) => {
      Plant.nom.toLowerCase().includes(searchPlant);  
    });
  }
  
isDivDisplayed = false;
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
