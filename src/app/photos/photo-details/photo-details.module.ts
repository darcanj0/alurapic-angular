import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoDetailsComponent } from './photo-details.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PhotoDetailsComponent,
  ],
  exports: [
    PhotoDetailsComponent,
  ]
})
export class PhotoDetailsModule { }
