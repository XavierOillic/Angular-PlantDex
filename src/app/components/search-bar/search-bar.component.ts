import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @Output() myrtilleVersParent = new EventEmitter();

  entrySearchPlant(framboiseEventDepuisHtml: any) {
    this.myrtilleVersParent.emit(framboiseEventDepuisHtml.target.value);

    //console.log('ENFANT TS', framboiseEventDepuisHtml.target.value);
  }
}
