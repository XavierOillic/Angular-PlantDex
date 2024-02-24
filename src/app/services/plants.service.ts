import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plant } from '../models/plant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlantsService {
  // A RAJOUTER SYSTEMATIQUEMENT DANS LE CONSTRUCTOR !!!
  constructor(private http: HttpClient) {}

  getLaPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>('http://localhost:3000/plants'); // NOUS PERMET GRACE à ce "FETCH" de récuperer le flux de donnée PLAntes
  }
  createNewPlant(plantToCreate: Plant): Observable<Plant> {
    return this.http.post<Plant>('http://localhost:3000/plants', plantToCreate);
  }
  updatePlant(plantToUpdate: Plant): Observable<Plant> {
    return this.http.put<Plant>('http://localhost:3000/plants', plantToUpdate);
  }
}
// ENTRE <> , je lui dit qu'il va formater les données récupérées dans un tableau défini dans PLANT.TS
