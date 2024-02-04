import { Component, Input } from '@angular/core';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-card-plant',
  templateUrl: './card-plant.component.html',
  styleUrls: ['./card-plant.component.css'],
})
export class CardPlantComponent {
  @Input() plant!: Plant;

  iconBootstrap: string = ' AZ ';

  //iconDropFill: string = 'B';
  //iconSun: string = 'C';
  //iconSunFill: string = 'D';

  //monMessage: string = 'Salut les terriens !';
}

/*
iconDrop: string = 'bi bi-droplet';
  iconDropFill: string = '<i class="bi bi-droplet-fill"></i>';
  iconSun: string = '<i class="bi bi-brightness-high"></i>';
  iconSunFill: string = '<i class="bi bi-brightness-high-fill"></i>'
*/
