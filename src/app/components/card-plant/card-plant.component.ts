import { Component, Input } from '@angular/core';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-card-plant',
  templateUrl: './card-plant.component.html',
  styleUrls: ['./card-plant.component.css'],
})
export class CardPlantComponent {
  @Input() plant!: Plant;

  iconName: string = '';

  iconForWater: string = 'bi bi-droplet'; // C'est grace à cette ligne que j'affiche.
  iconForWaterFill: string = '';
  iconForSun: string = 'bi bi-brightness-high';
  iconForSunFill: string = '';
  // PAS DE + POSSIBLE DANS LES RETURN DE CONDITION.
  waterNeedsDisplay() {
    //this.iconForWater = 'bi bi-droplet';
    if (this.plant.arrosage === 3) {
      this.iconForWater = 'bi bi-droplet-fill';
    } else if (this.plant.arrosage === 0) {
      this.iconForWater = 'bi bi-droplet';
    }
  }
  sunNeedsDisplay() {
    if (this.plant.soleil === 'moyen') {
      this.iconForSun = 'bi bi-brightness-high-fill';
    } else if (this.plant.soleil === 'beaucoup') {
      this.iconForSun = 'bi bi-brightness-high-fill';
    } else {
      this.iconForSun = 'bi bi-brightness-high';
    }
  }

  //monMessage: string = 'Salut les terriens !';
}

/*
iconForWaterP: string = 'bi bi-droplet'; // C'est grace à cette ligne que j'affiche.
  iconForWaterFillP: string = 'bi bi-droplet-fill';
  iconForSun: string = 'bi bi-brightness-high';
  iconForSunFill: string = 'bi bi-brightness-high-fill';
*/
