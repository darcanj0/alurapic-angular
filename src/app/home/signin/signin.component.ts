import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required,],
      password: ['', Validators.required,],
    });

  }

  signin() {
    this.authService.signin(
      this.loginForm.get('username').value,
      this.loginForm.get('password').value
    ).subscribe(
      obj => {
        console.log('autenticado');
      },
      err => {
        console.error(err);
        this.loginForm.reset();
      }
    );


  }

}
