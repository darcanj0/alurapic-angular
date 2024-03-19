import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  static KEY = 'authToken';

  hasToken() {
    return !!this.getToken();
  }

  getToken(): string | null {
    return window.localStorage.getItem(TokenService.KEY);
  }

  setToken(token: string) {
    window.localStorage.setItem(TokenService.KEY, token);
  }

  removeToken() {
    window.localStorage.removeItem(TokenService.KEY);
  }

  constructor() { }
}
