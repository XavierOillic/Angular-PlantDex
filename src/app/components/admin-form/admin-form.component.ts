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
  @Input() plantToEdit!: Plant;

  @Output() submitFormPlantEnvoi = new EventEmitter<Plant>();
  // LA BOUCHE AU PARENT pour envoyer qqch. ET j'envoie grâce  au SUBMITFORMPLANT

  ngOnInit(): void {
    this.initFormBanane();
  }

  initFormBanane() {
    this.formPlantTs = new FormGroup({
      nom: new FormControl('', Validators.required), // 1er Champ TS du Formulaire
      // Entre () : la premiere valeur est du texte '', et elle est REQUIRED.
      // Le premier champ est la valeur initiale.
      categorie: new FormControl(),
      soleil: new FormControl(),
      arrosage: new FormControl(),
      image: new FormControl(),
      id: new FormControl(),
    });
  }

  onSubmitForm() {
    console.log(this.formPlantTs.value);
    this.submitFormPlantEnvoi.emit(this.formPlantTs.value);
  }
}
/*
} else {
      this.formPlantTs = new FormGroup({
        nom: new FormControl(this.plantToEdit.nom, Validators.required),
        categorie: new FormControl(this.plantToEdit.categorie),
        soleil: new FormControl(this.plantToEdit.soleil),
        arrosage: new FormControl(this.plantToEdit.arrosage),
        image: new FormControl(this.plantToEdit.image),
        id: new FormControl(this.plantToEdit.id),
      });
      console.log(this.formPlantTs);
    }
*/
