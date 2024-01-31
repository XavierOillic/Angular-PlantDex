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

  btn_soleil(sunshine: Event) {
    this.alphabetic_btn.emit(sunshine);
    //console.log('Enfant => ', sunshine);
  }
  btn_arrosage(water: Event) {
    this.water_btn.emit(water);
    //console.log('Enfant => ', water);
  }
  btn_alphabetic(alphabetic: Event) {
    this.alphabetic_btn.emit(alphabetic);
    //console.log('Enfant => ', alphabetic);
  }
}
