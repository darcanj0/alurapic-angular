import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import EnvVariables from '../config/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signin(username: string, password: string) {
    return this.client.post(EnvVariables.API_BASE_URL + 'user/login', {
      userName: username, password
    });
  }

  constructor(
    private readonly client: HttpClient,
  ) { }
}
