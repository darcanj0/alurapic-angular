import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { SigninComponent } from './signin/signin.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule,
    CoreModule
  ],
  declarations: [SigninComponent]
})
export class HomeModule { }
