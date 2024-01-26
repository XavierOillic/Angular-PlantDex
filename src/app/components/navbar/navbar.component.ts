import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Output() myrtilleVersParent = new EventEmitter();

  entrySearchPlant(framboiseEventDepuisHtml: any) {
    this.myrtilleVersParent.emit(framboiseEventDepuisHtml.target.value);

    //console.log(framboiseEventDepuisHtml.target.value); //==> FONCTIONNE.
  }
}
