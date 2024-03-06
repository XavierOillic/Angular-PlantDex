import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Plant } from '../models/plant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlantsService {
  // A RAJOUTER SYSTEMATIQUEMENT DANS LE CONSTRUCTOR !!!
  constructor(private http: HttpClient) {}

  @Output() stockPlant!: Plant[];
  // Je GET le tableau complet.
  getLaPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>('http://localhost:3000/plants'); // NOUS PERMET GRACE à ce "FETCH" de récuperer le flux de donnée PLAntes
  }
  // Je GET l'ID d'une plante : DETAILS
  getLaPlantDetails(plantIdDetails: number): Observable<Plant> {
    const urlDetails = `http://localhost:3000/plants/${plantIdDetails}`;
    return this.http.get<Plant>(urlDetails);
  }
  // Je GET Une plante : CREATE
  createNewPlant(plantToCreate: Plant): Observable<Plant> {
    return this.http.post<Plant>('http://localhost:3000/plants', plantToCreate);
  }
  // Je GET l'ID d'une plante : DELETE
  deletePlant(id: number): Observable<Plant> {
    const url = `http://localhost:3000/plants/${id}`; // Je met l'ID en mode dynamique pour qu'il change à chaque PLante.
    return this.http.delete<Plant>(url); // La const URL me permet de stocker l'adresse et l'id Dynamique.
  }
  // Je GET l'ID d'une plante, pour la modifier, et je variabilise son adresse
  editPlant(plantIdEdit: Plant): Observable<Plant> {
    const urlEdit = `http://localhost:3000/plants/${plantIdEdit.id}`;
    return this.http.put<Plant>(urlEdit, plantIdEdit);
  }
  modifyPlantService(
    plantIdEdit: number,
    plantPlant: Plant
  ): Observable<Plant> {
    return this.http.put<Plant>(
      `http://localhost:3000/plants/${plantIdEdit}`,
      plantPlant
    );
  }
}

// ENTRE <> , je lui dit qu'il va formater les données récupérées dans un tableau défini dans PLANT.TS
