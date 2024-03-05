import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Plant } from 'src/app/models/plant';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css'],
})
export class AdminFormComponent implements OnInit {
  formPlantTs!: FormGroup;

  @Input() plant!: Plant;
  @Output() submitFormPlantEnvoi = new EventEmitter<Plant>();
  // LA BOUCHE AU PARENT pour envoyer qqch. ET j'envoie grâce  au SUBMITFORMPLANT

  ngOnInit(): void {
    this.initFormBanane();
  }

  initFormBanane() {
    this.formPlantTs = new FormGroup({
      nom: new FormControl(this.plant.nom, Validators.required), // 1er Champ TS du Formulaire
      // Entre () : la premiere valeur est du texte '', et elle est REQUIRED.
      // Le premier champ est la valeur initiale.
      categorie: new FormControl(this.plant.categorie),
      soleil: new FormControl(this.plant.soleil),
      arrosage: new FormControl(this.plant.arrosage),
      image: new FormControl(this.plant.image),
    });
    console.log(this.formPlantTs);
  }

  onSubmitForm() {
    console.log(this.formPlantTs.value);
    this.submitFormPlantEnvoi.emit(this.formPlantTs.value);
  }
}

/*
  @Input() plant!: Plant;
  @Input() plantToEdit!: Plant;

  @Output() submitFormPlantEnvoi = new EventEmitter<Plant>();

  ngOnInit(): void {
    this.initFormBanane();
  }

  initFormBanane() {
    if (!this.plant) {
      this.formPlantTs = new FormGroup({
        nom: new FormControl(Validators.required),
        catégorie: new FormControl(),
        soleil: new FormControl(),
        arrosage: new FormControl(),
        image: new FormControl(),
      });
    } else if (this.plantToEdit) {
      this.formPlantTs = new FormGroup({
        nom: new FormControl(this.plantToEdit.nom, Validators.required),
        categorie: new FormControl(this.plantToEdit.categorie),
        soleil: new FormControl(this.plantToEdit.soleil),
        arrosage: new FormControl(this.plantToEdit.arrosage),
        image: new FormControl(this.plantToEdit.image),
      });
      console.log(this.formPlantTs);
    }
  }

  onSubmitForm() {
    console.log(this.formPlantTs.value);
    this.submitFormPlantEnvoi.emit(this.formPlantTs.value);
  }
*/
