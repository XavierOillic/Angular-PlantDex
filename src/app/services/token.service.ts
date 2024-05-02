import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StoreTokenService } from './store-token.service';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(
    private http: HttpClient,
    private tokenStorage: StoreTokenService
  ) {}
  // ===========> C'EST LE GET QUI RÉCUPÈRE DEPUIS KEYCLOAK
  getTokenfromKC(
    url: string,
    client_id: string,
    client_secret: string,
    username: string,
    password: string
  ) {
    const urlencoded = new URLSearchParams({
      grant_type: 'password',
      client_id: client_id,
      client_secret: client_secret,
      username: username,
      password: password,
    });
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/x-www-form-urlencoded',
      }),
    };
    return this.http.post(url, urlencoded, httpOptions);
  }

  // ===========> C'EST LE GET QUI RÉCUPÈRE dans le LOCALSTORAGE et APPELE LE BACK.
  urlBack: string = 'http://localhost:8081/controller/admin';
  myGotToken!: { access_token: String };

  getToBack() {
    this.tokenStorage.getTokenFromLs();
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.myGotToken.access_token}`,
      }),
      responseType: 'text' as 'json',
    };

    return this.http.get(this.urlBack, httpOptions);
  }
}
