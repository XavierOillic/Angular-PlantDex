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
  iconForSun: string = '';
  iconForSunFill: string = '';

  waterNeedsDisplay() {
    //this.iconForWater = 'bi bi-droplet';
    if (this.plant.arrosage === 2) {
      this.iconForWaterFill = 'bi bi-droplet-fill';
    } else {
      this.iconForWaterFill = 'bi bi-droplet-fill';
    }
  }
  sunNeedsDisplay() {
    if (this.plant.soleil === 'moyen') {
      this.iconForSunFill + this.iconForSunFill;
    } else if (this.plant.soleil === 'beaucoup') {
      this.iconForSunFill + this.iconForSunFill + this.iconForSunFill;
    } else {
      this.iconForSun + this.iconForSun + this.iconForSun;
      console.log('Display test => ', this.iconForSun);
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
