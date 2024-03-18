import { NgModule } from '@angular/core';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchComponent } from './search/search.component';
import { SharedDirectivesModule } from 'src/app/shared/directives/directives.module';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescriptionPipe,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    PhotoModule,
    SharedModule,
    SharedDirectivesModule,
  ]
})
export class PhotoListModule { }
