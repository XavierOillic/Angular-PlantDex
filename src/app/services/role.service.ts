import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Role } from '../enum/role.enum';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor(private http: HttpClient) {}

  role!: string;
  a!: string;
  b!: string;

  setRoleInLs(a: string, b: string) {
    localStorage.setItem(a, b);
  }

  myGotRole!: string;

  getRoleFromLs() {
    const dataFromLs = localStorage.getItem('myRole');
    if (dataFromLs) {
      this.myGotRole = dataFromLs;
    } else {
      this.myGotRole = 'There are nos datas in the LocalStorage.';
    }
  }
}
