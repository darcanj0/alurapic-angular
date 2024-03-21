import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoDetailsComponent } from './photo-details.component';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    PhotoModule,
    RouterModule,
  ],
  declarations: [
    PhotoDetailsComponent,
    PhotoCommentsComponent,
  ],
  exports: [
    PhotoDetailsComponent,
    PhotoCommentsComponent,
  ]
})
export class PhotoDetailsModule { }
