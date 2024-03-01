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

  getLaPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>('http://localhost:3000/plants'); // NOUS PERMET GRACE à ce "FETCH" de récuperer le flux de donnée PLAntes
  }
  getLaPlantDetails(plantId: number): Observable<Plant> {
    const urlDetails = `http://localhost:3000/plants/${plantId}`;
    return this.http.get<Plant>(urlDetails);
  }
  createNewPlant(plantToCreate: Plant): Observable<Plant> {
    return this.http.post<Plant>('http://localhost:3000/plants', plantToCreate);
  }
  deletePlant(id: number): Observable<Plant> {
    const url = `http://localhost:3000/plants/${id}`; // Je met l'ID en mode dynamique pour qu'il change à chaque PLante.
    return this.http.delete<Plant>(url); // La const URL me permet de stcker l'adresse et l'id Dynamique.
  }
  updatePlant(plantToUpdate: number): Observable<Plant> {
    return this.http.put<Plant>('http://localhost:3000/plants/', plantToUpdate);
  }
}
// ENTRE <> , je lui dit qu'il va formater les données récupérées dans un tableau défini dans PLANT.TS
