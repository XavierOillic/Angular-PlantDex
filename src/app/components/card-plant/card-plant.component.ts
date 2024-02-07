import { Component, Input } from '@angular/core';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-card-plant',
  templateUrl: './card-plant.component.html',
  styleUrls: ['./card-plant.component.css'],
})
export class CardPlantComponent {
  @Input() plant!: Plant;

  iconBootstrap!: string;

  iconForWaterP: string = 'bi bi-droplet'; // C'est grace à cette ligne que j'affiche.
  iconForWaterFillP: string = 'bi bi-droplet-fill';
  iconForSun: string = 'bi bi-brightness-high';
  iconForSunFill: string = 'bi bi-brightness-high-fill';

  waterNeedsDisplay() {
    if (this.plant.arrosage == 2) {
      this.iconForWaterFillP + this.iconForWaterFillP;
    } else if (this.plant.arrosage == 3) {
      this.iconForWaterFillP + this.iconForWaterFillP + this.iconForWaterFillP;
    } else {
      this.iconForWaterP + this.iconForWaterP + this.iconForWaterP;
      console.log('Display test => ', this.iconForWaterP);
    }
  }
  sunNeedsDisplay() {
    if (this.plant.soleil == 'moyen') {
      this.iconForSunFill + this.iconForSunFill;
    } else if (this.plant.soleil == 'beaucoup') {
      this.iconForSunFill + this.iconForSunFill + this.iconForSunFill;
    } else {
      this.iconForSun + this.iconForSun + this.iconForSun;
      console.log('Display test => ', this.iconForSun);
    }
  }

  //monMessage: string = 'Salut les terriens !';
}

/*
iconDrop: string = '<i class="bi bi-droplet"></i>;
  iconDropFill: string = '<i class="bi bi-droplet-fill"></i>';
  iconSun: string = '<i class="bi bi-brightness-high"></i>';
  iconSunFill: string = '<i class="bi bi-brightness-high-fill"></i>'
*/
