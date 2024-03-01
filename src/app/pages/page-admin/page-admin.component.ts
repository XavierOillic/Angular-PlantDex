import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Plant } from 'src/app/models/plant';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css'],
})
export class PageAdminComponent implements OnInit {
  constructor(private plantsService: PlantsService) {}
  // C'est ICI QUE JE FAIS L'INJECTION DE DEPENDANCES pour utiliser les services de PLantsServices.
  @Input() plant!: Plant;

  plantsToAdmin: Plant[] = []; // JE déclare mon tableau TYPÉ  à vide
  //@Input() plantToModify!: Plant[];

  //C'est ici que j'essaie de récuperer les valeurs de la Plant, et de les envoyer vers la page EDIT pour les modifier
  @Output() sendModifyPlant = new EventEmitter();
  sendChoosenPlantToUpdate(updateByAdmin: number) {
    /* console.log('Affichage ds Page Admin :');
    this.sendModifyPlant.emit(updateByAdmin);*/
  }

  deletePLant(deletedPLant: number) {
    this.plantsService.deletePlant(deletedPLant).subscribe({
      next: () => {
        this.plantsToAdmin = this.plantsToAdmin.filter(
          (x) => x.id !== deletedPLant
        );
      },
    });
  }
  // le filtre me permet de filtrer le tableau pour un REFRESH de l'affichage dès la suppression
  // le subscribe attend un retour!

  ngOnInit(): void {
    this.plantsService.getLaPlants().subscribe((dataPLantJeChoisi) => {
      console.log(dataPLantJeChoisi);
      this.plantsToAdmin = [...dataPLantJeChoisi]; // Je lui met les données dedans, que je reçois grâce à plantservice.
    });
  }
}
