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

  @Input() iconName:
    | 'heart'
    | 'heart-fill'
    | 'sun'
    | 'sun-fill'
    | 'droplet'
    | 'droplet-fill' = 'heart';
  // ON TYPE l'IconName avec toutes SES valeurs POTENTIELLES et qu'on lui rend DISPOINBLES.
  // Si je met une autre valeur que celles déclarées ici, il ne l'acceptera pas.
}
