import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-buttons',
  templateUrl: './filter-buttons.component.html',
  styleUrls: ['./filter-buttons.component.css'],
})
export class FilterButtonsComponent {
  @Output() alphabetic_btn = new EventEmitter();
  @Output() water_btn = new EventEmitter();
  @Output() sunny_btn = new EventEmitter();

  btn_alphabetic(alphabetic: Event) {
    const target = alphabetic.target as HTMLInputElement;
    this.alphabetic_btn.emit(target.value);
    //console.log('Enfant => ', alphabetic);
  }

  btn_arrosage(water: Event) {
    const target = water.target as HTMLInputElement;
    this.water_btn.emit(target.value);
    //console.log('Enfant => ', water);
  }

  btn_soleil(sunshine: Event) {
    const target = sunshine.target as HTMLInputElement;
    this.sunny_btn.emit(target.value);
    //console.log('Enfant => ', sunshine);
  }
}
