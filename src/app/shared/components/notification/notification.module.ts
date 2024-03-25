import { NgModule } from '@angular/core';
import { NotificationComponent } from './notification.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NotificationComponent
  ],
  exports: [
    NotificationComponent,
  ]
})
export class NotificationModule { }
