import { Injectable } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { AbstractControl } from '@angular/forms';
import { debounceTime, first, map, switchMap } from 'rxjs/operators';

@Injectable()
export class UsernameValidator {
  constructor(private readonly signupService: SignupService) { }

  checkUsernameTaken() {
    return (control: AbstractControl) => {
      return control.valueChanges
        .pipe(debounceTime(300))
        .pipe(switchMap(username => {
          return this.signupService.checkUsernameTaken(username);
        }))
        .pipe(map(isTaken => isTaken ? { usernameTaken: true } : null))
        .pipe(first());
    };
  }
}
