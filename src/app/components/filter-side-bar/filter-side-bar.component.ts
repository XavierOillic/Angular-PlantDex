import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-side-bar',
  templateUrl: './filter-side-bar.component.html',
  styleUrls: ['./filter-side-bar.component.css'],
})
export class FilterSideBarComponent {
  // ETAPE UNE, ENFANT, TS, JE DECLARE MON INPUT (TABLEAU DE STRING non initialisé).
  @Input() categoriesToDisplay!: string[];
  @Output() categoriesToFilter = new EventEmitter<string[]>();

  checkedCategories: string[] = []; // cette propriete me permet de garder les valeurs

  onCheckedCategories(event: any) {
    //const cochee = event.target.checked;
    //const valeur = event.target.value;

    const target = event.target as HTMLInputElement;

    //Le target, c'est l'élement duquel provient l'EVENT du CHANGE (CLICK)
    // Et je lui dit qu'il considère cela AS un evenement HTML.
    // if (cochee == true && valeur != undefined)

    if (target.checked) {
      /* =========>Lorsqu'un user check une checkbox après avoir tout décoché
       * =========>on doit vider le tableau pour qu'il soit vide au départ
       * =========> et l'ajoute à un tableau de catégories cochée */
      if (this.checkedCategories.length === this.categoriesToDisplay.length) {
        this.checkedCategories = [];
        // =========> SI mon tab.length == à mon tab originel, je retourne un tab vide.
      }
      this.checkedCategories.push(target.value);
      //console.log(`Cochée : ${this.checkedCategories}`);
      //=========> Lorsqu'un USER coche une checkbox* ==> On l'ajoute à un tableau de catégorie cochée
    } else {
      this.checkedCategories = this.checkedCategories.filter(
        (categorie) => categorie !== target.value
      );
      //console.log(`Décochée : ${this.checkedCategories}`);
      //=========> Lorsqu'un USER décoche ==> on doit retirer le CHECK du tableau de cochée
      if (this.checkedCategories.length === 0) {
        this.checkedCategories = [...this.categoriesToDisplay];
        //=========> Lorsqu'aucune catégorie n'est cochée : il faut afficher tout le tableau poar défaut.
        //console.log(this.checkedCategories);
      }
    }
    this.categoriesToFilter.emit(this.checkedCategories);
  }
  @Output() discoSending = new EventEmitter();

  discoFunction(discoColorText: Event) {
    const target = discoColorText.target as HTMLButtonElement;
    //console.log('Dans la NavBar : ', discoColorMode);
    this.discoSending.emit(target.value);
  }
  discoFunctionBody(discoColorFond: Event) {
    const target = discoColorFond.target as HTMLButtonElement;
    //console.log('Dans la NavBar : ', discoColorMode);
    this.discoSending.emit(target.value);
  }
}
