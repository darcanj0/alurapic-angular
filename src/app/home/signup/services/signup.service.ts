import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import EnvVariables from 'src/app/config/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  checkUsernameTaken(username: string) {
    return this.client.get(EnvVariables.API_BASE_URL + 'user/exists/' + username);
  }

  constructor(private readonly client: HttpClient) { }
}
