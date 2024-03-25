import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class SignupService {

  checkUsernameTaken(username: string) {
    return this.client.get(environment.API_BASE_URL + 'user/exists/' + username);
  }

  signup(user: NewUser) {
    return this.client.post(environment.API_BASE_URL + 'user/signup',
      { ...user, userName: user.username }
    );
  }

  constructor(private readonly client: HttpClient) { }
}

export interface NewUser {
  username: string;
  email: string;
  fullName: string;
  password: string;
}

