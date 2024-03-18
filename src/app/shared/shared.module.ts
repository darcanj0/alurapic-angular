import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoCardComponent } from './components/photo-card/photo-card.component';

@NgModule({
  imports: [CommonModule,],
  declarations: [PhotoCardComponent],
  exports: [PhotoCardComponent]
})
export class SharedModule { }
