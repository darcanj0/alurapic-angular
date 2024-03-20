import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { SigninComponent } from './signin/signin.component';
import { CoreModule } from '../core/core.module';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home.routing';
import { SignupService } from './signup/services/signup.service';
import { UsernameValidator } from './signup/validators/username.validator.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule,
    CoreModule,
    HomeRoutingModule
  ],
  declarations: [SigninComponent,
    SignupComponent,
    HomeComponent,
  ],
  providers: [
    SignupService,
    UsernameValidator,
  ]
})
export class HomeModule { }
