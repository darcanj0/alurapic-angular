import { NgModule } from '@angular/core';
import { DarkenOnHoverDirective } from './darken-on-hover.directive';
import { ImmediateClickDirective } from './immediate-click.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DarkenOnHoverDirective,
    ImmediateClickDirective,
  ],
  exports: [
    DarkenOnHoverDirective,
    ImmediateClickDirective,
  ],
})
export class SharedDirectivesModule { }
