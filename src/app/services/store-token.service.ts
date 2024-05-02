import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccessToken } from '../models/accesToken';

@Injectable({
  providedIn: 'root',
})
export class StoreTokenService {
  constructor(private http: HttpClient) {}

  a!: string;
  b!: string;

  setTokeninLocalStorage(a: string, b: string) {
    localStorage.setItem(a, b);
  }

  myGotTokenAccess!: AccessToken;
  getTokenFromLs() {
    const tokenFromLs = localStorage.getItem('');
    if (tokenFromLs) {
      this.myGotTokenAccess = JSON.parse(tokenFromLs);
    }
    return this.myGotTokenAccess;
  }
}
