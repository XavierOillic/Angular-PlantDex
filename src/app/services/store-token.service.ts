import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccessToken } from '../models/accesToken';

@Injectable({
  providedIn: 'root',
})
export class StoreTokenService {
  constructor(private http: HttpClient) {}

  setTokenInLocalStorage(key: string, value: object) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  myGotTokenAccess!: { access_token: string };
  getTokenFromLs() {
    const tokenFromLs = localStorage.getItem('myToken');
    if (tokenFromLs) {
      this.myGotTokenAccess = JSON.parse(tokenFromLs);
    }
    return this.myGotTokenAccess;
  }
}
