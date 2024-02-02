import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-buttons',
  templateUrl: './filter-buttons.component.html',
  styleUrls: ['./filter-buttons.component.css'],
})
export class FilterButtonsComponent {
  @Output() alphabetic_btn = new EventEmitter<string>();
  @Output() reset_btn = new EventEmitter<string>();
  @Output() water_btn = new EventEmitter<string>();
  @Output() sunny_btn = new EventEmitter<string>();

  btn_alphabetic(alphabetic: Event) {
    const target = alphabetic.target as HTMLButtonElement;
    this.alphabetic_btn.emit(target.value);
    //console.log('Enfant => ', alphabetic);
  }
  resetAlpha(reset: Event) {
    const target = reset.target as HTMLButtonElement;
    this.reset_btn.emit(target.value);
    //console.log('Enfant => ', reset);
  }

  btn_arrosage(water: Event) {
    const target = water.target as HTMLButtonElement;
    this.water_btn.emit(target.value);
    //console.log('Enfant => ', water);
  }

  btn_soleil(sunshine: Event) {
    const target = sunshine.target as HTMLButtonElement; // C'est un élément BUTTON HTML que je récupère.
    this.sunny_btn.emit(target.value);
    //console.log('Enfant => ', sunshine);
  }
}
