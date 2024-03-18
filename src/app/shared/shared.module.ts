import { NgModule } from '@angular/core';
import { PhotoCardComponent } from './components/photo-card/photo-card.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [PhotoCardComponent],
  exports: [PhotoCardComponent]
})
export class SharedModule { }
