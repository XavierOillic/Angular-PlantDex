import { Component, EventEmitter, Output } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

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
   
throw new Error('Method not implemented.');
}

}
