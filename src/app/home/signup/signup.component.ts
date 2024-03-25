import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform/platform-detector.service';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { NewUser, SignupService } from './services/signup.service';
import { UsernameValidator as UsernameValidatorService } from './validators/username.validator.service';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [SignupService, UsernameValidatorService],
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  @ViewChild('emailInput')
  emailInput: ElementRef<HTMLInputElement>;

  signup() {
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signupService.signup(newUser)
      .subscribe(
        () => this.router.navigate(['']),
        (err) => {
          console.error(err);
          if (this.platformDetector.isBrowser()) {
            this.emailInput.nativeElement.focus();
          }
        }
      );
  }

  constructor(
    private formBuilder: FormBuilder,
    private readonly usernameValidator: UsernameValidatorService,
    private readonly signupService: SignupService,
    private router: Router,
    private platformDetector: PlatformDetectorService,
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
          lowerCaseValidator
        ],
        [
          this.usernameValidator.checkUsernameTaken()
        ]
      ],
      fullName: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40)
      ]],
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(14)
      ]],
    });
    if (this.platformDetector.isBrowser()) {
      this.emailInput.nativeElement.focus();
    }
  }

}
