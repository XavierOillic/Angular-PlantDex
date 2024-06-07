import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { Plant } from '../models/plant';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { StoreTokenService } from './store-token.service';

@Injectable({
  providedIn: 'root',
})
export class PlantsService {
  // A RAJOUTER SYSTEMATIQUEMENT DANS LE CONSTRUCTOR !!!
  constructor(
    private http: HttpClient,
    private getTokenFromKc: TokenService,
    private storeToken: StoreTokenService
  ) {}

  //@Output() stockPlant!: Plant[];
  // Je GET le tableau complet.
  getLaPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>('http://localhost:8081/controller/plante'); // NOUS PERMET GRACE à ce "FETCH" de récuperer le flux de donnée PLAntes
  }
  // Je GET l'ID d'une plante : DETAILS
  getLaPlantDetails(idDetails: number): Observable<Plant> {
    const urlDetails = `http://localhost:8081/controller/plante/${idDetails}`;
    return this.http.get<Plant>(urlDetails);
  }
  // Je GET Une plante : CREATE
  createNewPlant(plantToCreate: Plant): Observable<Plant> {
    return this.http.post<Plant>(
      'http://localhost:8081/controller/plante',
      plantToCreate
    );
  }
  // Je GET l'ID d'une plante : DELETE
  deletePlant(idDelete: number): Observable<Plant> {
    const myGotToken: { access_token: string } =
      this.storeToken.getTokenFromLs();
    console.log('Affichege mygotToken : ', myGotToken);
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${myGotToken.access_token}`,
        //'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJaRFJwVlllWmVKQUdQcHlZSWdsOTlFb0FGdEh1UjM0YTRWNC1LVi1rWElNIn0.eyJleHAiOjE3MTQ2NTA5NjIsImlhdCI6MTcxNDY1MDY2MiwianRpIjoiMzc5NWQ5NjItZjM0Yy00ODQzLWJkZDQtNjI0Y2M2ZWI4OTQwIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo5MDkwL3JlYWxtcy9jZGEiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiZDdhZWQ1NmMtOWIwNS00ODQyLWE0YzYtMTk0ZmVmMzVjYjBjIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiY2RhIiwic2Vzc2lvbl9zdGF0ZSI6IjcxMzJhYWRlLTg0YmUtNGMxMy1iZTljLTliMmY5MWVmNzIzYSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiIiwiaHR0cDovL2xvY2FsaG9zdDo0MjAwIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJjZGEtc3VwZXJ2aXNldXIiLCJjZGEtdXNlciIsIm9mZmxpbmVfYWNjZXNzIiwiY2RhLWFkbWluIiwidW1hX2F1dGhvcml6YXRpb24iLCJkZWZhdWx0LXJvbGVzLWNkYSJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsInNpZCI6IjcxMzJhYWRlLTg0YmUtNGMxMy1iZTljLTliMmY5MWVmNzIzYSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJuYW1lIjoidXNlcjEgdXNlcjEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ1c2VyMSIsImdpdmVuX25hbWUiOiJ1c2VyMSIsImZhbWlseV9uYW1lIjoidXNlcjEiLCJlbWFpbCI6InVzZXJAY2RhLmNvbSJ9.fzdDeLoa-ZjwOCAqE4nyjh7-9A8D5WVEmvE3bZkZBam9nGju9gWE29fwlewl0YWTm-TdJTtK0_G31oS9J7FXoKlDNgAhqtPFHKxN_R94bvnTxuhLewNH3Ilq9ub3oOHyLj8J8rmPL0BZcvHd67YfhrTFkqvgGhGbyXtGc1kg3Gt7lNSglLP7IknsZm_PX6W3TKfJd7V0iZHZvRUuAz3PIFsY5GALRCLb87kYIjlQ1h3xV1fhh1DUPIXdafK4R9USqsKBPPSfbIFuUWDot4j5fqK6R9tLjzsp9M1n555aVNVUMCVtGudXmX3jXFfyQi5NyT1HSubXhosWy9i89xsZMA',
      }),
    };

    const url = `http://localhost:8081/controller/plante/${idDelete}`; // Je met l'ID en mode dynamique pour qu'il change à chaque PLante.

    return this.http.delete<Plant>(url, httpOptions); // La const URL me permet de stocker l'adresse et l'id Dynamique.
  }
  // le HttpOptions , c'est les Headers de la request.
  // Je GET l'ID d'une plante, pour la modifier, et je variabilise son adresse
  editPlant(plantIdEdit: Plant): Observable<Plant> {
    const urlEdit = `http://localhost:8081/controller/plante/${plantIdEdit.id}`;
    return this.http.put<Plant>(urlEdit, plantIdEdit);
  }
  modifyPlantService(idUpdate: number, plantPlant: Plant): Observable<Plant> {
    return this.http.put<Plant>(
      `http://localhost:8081/controller/plante/${idUpdate}`,
      plantPlant
    );
  }
}

// ENTRE <> , je lui dit qu'il va formater les données récupérées dans un tableau défini dans PLANT.TS
