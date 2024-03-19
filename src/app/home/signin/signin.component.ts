import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required,],
      password: ['', Validators.required,],
    });

  }

  signin() {
    const username = this.loginForm.get('username').value;
    this.authService.signin(
      username,
      this.loginForm.get('password').value
    ).subscribe(
      _ => {
        this.router.navigateByUrl(`user/${username}`);
      },
      err => {
        console.error(err);
        this.loginForm.reset();
      }
    );


  }

}
