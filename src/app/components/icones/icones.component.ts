import { Component, EventEmitter, Input } from '@angular/core';
//import url from "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css";

@Component({
  selector: 'app-icones',
  templateUrl: './icones.component.html',
  styleUrls: ['./icones.component.css'],
})
export class IconesComponent {
  @Input() icon!: string;

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
