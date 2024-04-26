import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Output() myrtilleVersParent = new EventEmitter();

  entrySearchPlant(framboiseEventDepuisHtml: Event) {
    const target = framboiseEventDepuisHtml.target as HTMLInputElement;
    this.myrtilleVersParent.emit(target.value);

    //console.log('ENFANT TS', framboiseEventDepuisHtml.target.value);
  }

  @Output() envoiDuClick = new EventEmitter();

  openChoiceModal(btnModal: MouseEvent) {
    console.log('Affichage du btn: ', btnModal);
    this.envoiDuClick.emit(btnModal);
  }
}
