import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() myrtilleVersParent = new EventEmitter();

  entrySearchPlant( framboiseEventDepuisHtml: any) {
    this.myrtilleVersParent.emit(framboiseEventDepuisHtml.target.value);

    //console.log(framboiseEventDepuisHtml.target.value); //==> FONCTIONNE.
   }
  }

  /*
  arrPlant = []; 
  plantsToDisplay: any;
  
  transmitSearch(receivedSearch: any){
    console.log(receivedSearch);

    let searchPlant: string = receivedSearch;

    let tabFiltre: any | [];
    tabFiltre = this.plantsToDisplay;

    this.plantsToDisplay = this.plantsToDisplay.filter((Plant: { name: string; }) => {
      Plant.name.toLowerCase().includes(searchPlant);
    });
    */

