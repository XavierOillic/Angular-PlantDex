import { Component, Input } from '@angular/core';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-icones',
  templateUrl: './icones.component.html',
  styleUrls: ['./icones.component.css'],
})
export class IconesComponent {
  @Input() icons!: string;
  @Input() plant!: Plant;

  @Input() sunshineIcons!: string;
  @Input() waterIcons!: string;

  //@Input() message: string = '';

  /*
  sunnyIconsDisplay() {}
  waterIconDisplay() {
    if (this.plant.arrosage == 2 || this.plant.arrosage == 4) {
      this.waterIcons;
    } else {
      this.waterIcons;
    }
    return this.waterIcons;
  }
  */

  /*
   * TODO @Input to set icon name
   * Result :
   * <app-icon [iconName]="'sun-fill'"></app-icon>
   * I want to display an icon with a filled sun
   *
   * Steps :
   * >>> 1 - Install bootstrap icon library
   * >>> 2 - Include icon's CSS file into your Angular project
   * >>> 3 - Test if it working with this example :
   *   <i class="bi-alarm"></i>
   *
   * 4 - Adapt to use the @Input value and replace the class
   */
}