import { Component, Input } from '@angular/core';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-icones',
  templateUrl: './icones.component.html',
  styleUrls: ['./icones.component.css'],
})
export class IconesComponent {
  @Input() sunshineIcons: string = '';
  @Input() waterIcons: string = '';

  // JE STOCKE DANS UNE PROPRIÉTÉ LA VALEUR DE L'INPUT. QUE J'INITIALISE A RIEN.
  // ET JE LES ENVOIE DANS LE HTML POUR MARQUER LES EMPLACEMENTS

  //@Input() iconName: string = '';
  //@Input() message: string = '';
}
