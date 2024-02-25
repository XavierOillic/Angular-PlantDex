import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Plant } from 'src/app/models/plant';
import { PageAdminComponent } from 'src/app/pages/page-admin/page-admin.component';
import { PlantsService } from 'src/app/services/plants.service';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css'],
})
export class AdminUpdateComponent implements OnInit {
  constructor(private plantsService: PlantsService) {}
  //private pageAdminCompo: PageAdminComponent
  formPlantTs!: FormGroup;
  plantUpdating: Plant[] = [];

  @Input() plant!: Plant;

  toUpdateForm() {
    throw new Error('Method not implemented.');
  }

  @Output() submitForUpdate = new EventEmitter<Plant>();

  ngOnInit(): void {
    this.initFormUpdate();
  }

  initFormUpdate() {
    this.formPlantTs = new FormGroup({
      nom: new FormControl('', Validators.required), // 1er Champ TS du Formulaire
      // Entre () : la premiere valeur est du texte '', et elle est REQUIRED.
      categorie: new FormControl(),
      soleil: new FormControl(),
      arrosage: new FormControl(),
      image: new FormControl(),
    });
    console.log(this.formPlantTs);
  }

  //sendChoosenPlantToUpdate() {}
}
