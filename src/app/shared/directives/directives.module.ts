import { NgModule } from '@angular/core';
import { DarkenOnHoverDirective } from './darken-on-hover.directive';
import { ImmediateClickDirective } from './immediate-click.directive';
import { CommonModule } from '@angular/common';
import { SignedInOnlyDirective } from './signed-in-only.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    DarkenOnHoverDirective,
    ImmediateClickDirective,
    SignedInOnlyDirective,
  ],
  exports: [
    DarkenOnHoverDirective,
    ImmediateClickDirective,
    SignedInOnlyDirective,
  ],
})
export class SharedDirectivesModule { }
