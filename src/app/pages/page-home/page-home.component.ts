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
  plantTampon : Plant[] = [];
  monTitle= "Test d'Affichage InfoBulle";

  arrPlant = [];
  
  constructor(private plantsService: PlantsService) {}

   transmitSearch(receivedSearchPlant: any){
    console.log(receivedSearchPlant);
    console.log(this.plantsToDisplay);

    let searchPlant: string = receivedSearchPlant;

    this.plantTampon = this.plantsToDisplay.filter((Plant) =>
      Plant.nom.toLowerCase().includes(searchPlant) 
    );
  }
  //je met en place un tableau tampon pour ne pas toucher à mon tab originel et pour pouvoir toujours afficher un tableau complet.
  //Dans le HTML, il me faux aussi modifier le NGFOR, pour qu'il boucle à chaque recherche dans tout la tabTAMPON.
  
isDivDisplayed = false;
  displayDiv (){
     this.isDivDisplayed = !this.isDivDisplayed; // faire apparaitre et disparaitre la div noire sous le bandeau de nav
  }
  
  ngOnInit(): void {
      this.plantsService.getLaPlants().subscribe((dataPLantJeChoisi) => {
      console.log(dataPLantJeChoisi); // Je stocke dans ce dataPlant les données de la BDD simulée.
      // LE SUBSCRIBE remplace le THEN ! et la partie avant le FETCH.
      this.plantsToDisplay = [...dataPLantJeChoisi];
      this.plantTampon = [...dataPLantJeChoisi];
    });
    // Le OnInit, stocke et affiche le contenu de la BDD dès le chargement de la page.
    // Je charge et affiche le plantTampon, ET le plantsToDisplay.
 
  }

}
