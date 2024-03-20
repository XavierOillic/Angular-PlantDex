import { Component, OnInit, Output } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { __values } from 'tslib';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css'],
})
export class PageHomeComponent implements OnInit {
  plantsToDisplay: Plant[] = []; // On initialise le tableau avec un tableau vide.
  plantTampon: Plant[] = [];

  categoriesToSend: string[] = [];

  tabTamponByText: Plant[] = []; // Tableau

  monTitle = "Test d'Affichage InfoBulle";

  arrPlant = [];

  tabPlantFiltrAlpha: Plant[] = [];

  tabTempFinal: Plant[] = [];
  filtrCheckBox: string[] = [];
  filtrText: string = '';

  // Ce PLantsService, UN SERVICE, peut être mis en place dans n'importe quel CONSTRUCTOR  Component TS si j'en ai besoin.
  constructor(private plantsService: PlantsService) {}

  transmitSearch(receivedSearchPlant: any) {
    let searchPlant: string = receivedSearchPlant;

    this.plantTampon = this.plantsToDisplay.filter((Plant) =>
      Plant.nom.toLowerCase().includes(searchPlant)
    );
  }
  //je met en place un tableau tampon pour ne pas toucher à mon tab originel et pour pouvoir toujours afficher un tableau complet.
  //Dans le HTML, il me faux aussi modifier le NGFOR, pour qu'il boucle à chaque recherche dans tout la tabTAMPON.

  /*
  isDivDisplayed = false;
  displayDiv() {
    this.isDivDisplayed = !this.isDivDisplayed; // faire apparaitre et disparaitre la div noire sous le bandeau de nav
  }
  */

  ngOnInit(): void {
    this.plantsService.getLaPlants().subscribe((dataPLantJeChoisi) => {
      console.log(dataPLantJeChoisi); // Je stocke dans ce dataPlant les données de la BDD simulée.
      // LE SUBSCRIBE remplace le THEN ! et la partie avant le FETCH.
      this.plantsToDisplay = [...dataPLantJeChoisi]; // PROPRIETE

      this.tabTamponByText = [...dataPLantJeChoisi]; // tableau temp filtre search bar.

      this.categoriesToSend = this.getCategoriesFromPlants(dataPLantJeChoisi);
      //====> ETAPE TROIS Je stocke dans ce tableau déclaré vide au dessus MA METHODE, développé au dessous.
    });
  }
  // Le OnInit, stocke et affiche le contenu de la BDD dès le chargement de la page.
  // Je charge et affiche le plantTampon, ET le plantsToDisplay.

  // Retourner un tableau contenant les catégories des plantes de manière unique
  // ['plante verte', 'orchidés', 'bonsaïs']
  // Indice : .map() / Set

  getCategoriesFromPlants(plants: Plant[]): string[] {
    // Je MAP le tableau de SERVICE plants pour ne récuperer que les catégorie ==> LE X.CATEGORIES
    const tabIntermediaire = plants.map((x) => x.categorie);

    const filtrParCat = new Set(tabIntermediaire);

    const tabSansdoublon = [...filtrParCat]; //... le SPREAD OPERATOR ==> iterer
    //console.log(tabSansdoublon);

    return tabSansdoublon;
  }

  filterPlantsByCategories(categories: string[]) {
    this.filtrCheckBox = categories;
    this.FiltrADeux();
    //console.log(`Je suis dans le parent  ==> ${categories}`);
  }

  filterPlantsByText(searchByText: string) {
    this.filtrText = searchByText;
    this.FiltrADeux();
    //console.log('Parent = >', searchByText);
  }

  FiltrADeux(): Plant[] {
    this.plantsToDisplay = [...this.tabTamponByText]; // A chaque appel de ma méhode mon tableau doit être plein.

    if (this.filtrText !== '') {
      // Si la valeur de filtrText est l'opposé de 'rien' ==> !==
      this.plantsToDisplay = this.plantsToDisplay.filter((y) =>
        y.nom.toLowerCase().includes(this.filtrText)
      );
      //console.log(this.plantTampon); Je filtre avec mon champ de texte. Le plantsToDisplay est celui qui est envoyé à l'enfant.
    }
    if (this.filtrCheckBox.length !== 0) {
      this.plantsToDisplay = this.plantsToDisplay.filter((x) =>
        this.filtrCheckBox.includes(x.categorie)
      );
      //console.log(this.tabTempFinal); Je filtre à nouveau avec les checkbox.
    }
    return this.tabTempFinal;
  }

  sortByWater(byWaterNeed: any) {
    console.log('Parent => ', byWaterNeed);
  }
  sortBySunshine(bySunshineNeed: any) {
    console.log('Parent => ', bySunshineNeed);
  }
  sortByAlphabetic(byAlphabetic: any) {
    this.tabPlantFiltrAlpha = [...this.plantsToDisplay];

    this.tabPlantFiltrAlpha.sort(function (a, b) {
      if (a.nom < b.nom) {
        return -1;
      }
      if (a.nom > b.nom) {
        return 1;
      } else {
        return 0;
      }
    });
    this.plantsToDisplay = [...this.tabPlantFiltrAlpha];
    console.log('Parent => ', this.tabPlantFiltrAlpha);
  }
  resetAlpha(back: string) {
    this.tabPlantFiltrAlpha = [...this.plantsToDisplay];
  }

  iconNameTest: string = '';

  color = '#';
  letters = '0123456789ABCDEF';

  colorText() {
    console.log('Page-Home, colorText !');
    this.color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + this.color).slice(-6);
  }

  colorBody(rdmColor: any) {
    console.log('Page-Home, colorBody !');
    this.color = '#';
    for (var i = 0; i < 6; i++) {
      this.color += this.letters[Math.floor(Math.random() * 16)];
    }
    return rdmColor;
  }
  resetAllColors(colorReseted: string) {
    if (this.color + this.letters !== '#FFFFFF') {
      colorReseted === '#FFFFFF';
    }
  }
}
