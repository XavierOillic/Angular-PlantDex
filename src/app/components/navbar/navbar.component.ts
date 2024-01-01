import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  arrPlant = []; 
  plantsToDisplay: any;
  
  transmitSearch(receivedSearch: any){
    console.log(receivedSearch);

    let searchPlant: string = receivedSearch;

    let tabFiltre: any | [];
    tabFiltre = this.plantsToDisplay;

    this.plantsToDisplay = tabFiltre.filter((Plant: { first_name: string; }) => {
      Plant.first_name.toLowerCase().includes(searchPlant);
    });
  }

       /*
       let searchPlant: string;
    //let searchPlant : RegExp = /[a-zA-Z]/i;
    const filrPlant = this.plantsToDisplay.filter((arrPlant: { nom: string; }) =>{
        return arrPlant.nom.toLowerCase().includes(searchPlant);
    })
    */

  }
}
