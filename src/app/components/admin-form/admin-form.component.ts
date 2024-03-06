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
  @Input() plantGotAndEdited!: Plant;

  @Output() submitFormPlantEnvoi = new EventEmitter<Plant>();
  // LA BOUCHE enfant pour envoyer qqch au parent. ET j'envoie grâce  au SUBMITFORMPLANT

  ngOnInit(): void {
    this.initFormBanane();
  }

  initFormBanane() {
    if (this.plantGotAndEdited) {
      this.formPlantTs = new FormGroup({
        nom: new FormControl(this.plantGotAndEdited.nom, Validators.required),
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
        image: new FormControl(
          this.plantGotAndEdited.image,
          Validators.required
        ),
        id: new FormControl(this.plantGotAndEdited.id, Validators.required),
      });
    } else {
      this.formPlantTs = new FormGroup({
        nom: new FormControl('', Validators.required),
        categorie: new FormControl(''),
        soleil: new FormControl(''),
        arrosage: new FormControl(''),
        image: new FormControl(''),
        id: new FormControl(''),
      });
    }
  }

  onSubmitForm() {
    console.log(this.formPlantTs.value);
    this.submitFormPlantEnvoi.emit(this.formPlantTs.value);
  }
}
