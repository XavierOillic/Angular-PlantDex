import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-side-bar',
  templateUrl: './filter-side-bar.component.html',
  styleUrls: ['./filter-side-bar.component.css'],
})
export class FilterSideBarComponent {
  // ETAPE UNE, ENFANT, TS, JE DECLARE MON INPUT (TABLEAU DE STRING non initialisé).
  @Input() categoriesToDisplay!: string[];

  onCheckedCategories(event: any) {
    console.log(event.target.checked);
    console.log(event.target.value);
    const target = event.target as HTMLInputElement;
    //Le target, c'est l'élement duquel provient l'EVENT du CHANGE (CLICK)
    // Et je lui dit qu'il considère cela AS un evenment HTML.

    /**
     * Lorsqu'un USER coche une checkbox
     * ==> On l'ajoute à un tableau de catégorie cochée
     *
     * Et que c'est la première coche
     * ==> on doit vider le tableau pour qu'il soit vide au départ
     *
     * Lorsqu'un USER décoche
     * ==> on doit retirer le CHECK du tableau de cochée
     *
     * Lorsqu'aucune catégorie n'est cochée
     * ==> il faut afficher tout le tableau poar défaut.
     */
  }
}
