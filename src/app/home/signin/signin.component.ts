import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { PlatformDetectorService } from 'src/app/core/platform/platform-detector.service';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;

  @ViewChild('usernameInput')
  usernameInput: ElementRef<HTMLInputElement>;

  fromUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetector: PlatformDetectorService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.fromUrl = params.fromUrl;
    });

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required,],
      password: ['', Validators.required,],
    });
    this.loginForm.reset();
    if (this.platformDetector.isBrowser()) {
      this.usernameInput.nativeElement.focus();
    }
  }

  signin() {
    const username = this.loginForm.get('username').value;
    this.authService.signin(
      username,
      this.loginForm.get('password').value
    ).subscribe(
      _ => {
        if (this.fromUrl) {
          this.router.navigateByUrl(this.fromUrl);
        } else {
          this.router.navigateByUrl(`user/${username}`);
        }
      },
      err => {
        console.error(err);
        alert('Invalid Credentials!');
        this.loginForm.reset();
        if (this.platformDetector.isBrowser()) {
          this.usernameInput.nativeElement.focus();
        }
      }
    );


  }

}
