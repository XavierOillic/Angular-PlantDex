import { Component, EventEmitter, Output } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output()myrtilleVersParent = new EventEmitter();

  entrySearchPlant( framboiseEventDepuisHtml: any) {
    this.myrtilleVersParent.emit(framboiseEventDepuisHtml.target.value);
    //console.log(framboiseEventDepuisHtml.target.value);
   }

}
