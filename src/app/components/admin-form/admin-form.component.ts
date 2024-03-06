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
  formPlantEdit!: FormGroup;

  @Input() plant!: Plant;
  @Input() plantGotAndEdited!: Plant;

  @Output() submitFormPlantEnvoi = new EventEmitter<Plant>();

  titre: string = '';
  // LA BOUCHE enfant pour envoyer qqch au parent. ET j'envoie grâce  au SUBMITFORMPLANT

  initFormBanane() {
    console.log('test avec Davy : ', this.plantGotAndEdited); // return " Undefined "
    if (this.plantGotAndEdited) {
      this.titre = 'UPDATE';
      this.formPlantTs = new FormGroup({
        nom: new FormControl(this.plantGotAndEdited.nom, Validators.required),
        image: new FormControl(
          this.plantGotAndEdited.image,
          Validators.required
        ),
        categorie: new FormControl(
          this.plantGotAndEdited.categorie,
          Validators.required
        ),
        soleil: new FormControl(
          this.plantGotAndEdited.soleil,
          Validators.required
        ),
        arrosage: new FormControl(
          this.plantGotAndEdited.arrosage,
          Validators.required
        ),
        id: new FormControl(this.plantGotAndEdited.id, Validators.required),
      });
    } else {
      this.titre = 'CREATE A PLANT.';
      this.formPlantTs = new FormGroup({
        nom: new FormControl('', Validators.required),
        image: new FormControl(''),
        categorie: new FormControl(''),
        soleil: new FormControl(''),
        arrosage: new FormControl(''),
        id: new FormControl(''),
      });
    }
  }

  onSubmitForm() {
    console.log(this.formPlantTs.value);
    this.submitFormPlantEnvoi.emit(this.formPlantTs.value);
  }

  ngOnInit(): void {
    this.initFormBanane();
  }
}
