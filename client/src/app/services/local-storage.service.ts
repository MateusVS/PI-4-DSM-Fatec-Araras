import { LoginResponse } from './../models/login-response';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private readonly key = 'userData';

  constructor() { }

  public save(userData: LoginResponse): void {
    if(!this.isCity()) {
      userData['city'] = 'araras';
    } else {
      userData.city = this.getCity();
    }
    let userDataStr = JSON.stringify(userData);
    localStorage.setItem(this.key, userDataStr);
  }

  public getToken(): string {
    let userData: LoginResponse = JSON.parse(localStorage.getItem(this.key) as string);
    return userData.token;
  }

  public getUserId(): number {
    let userData: LoginResponse = JSON.parse(localStorage.getItem(this.key) as string);
    return userData.user_id;
  }

  public getCity(): string {
    let userData: LoginResponse = JSON.parse(localStorage.getItem(this.key) as string);
    return userData.city as string;
  }

  public isCity(): boolean {
    let userData: LoginResponse = JSON.parse(localStorage.getItem(this.key) as string);
    return !!userData?.city ?? false;
  }
}
