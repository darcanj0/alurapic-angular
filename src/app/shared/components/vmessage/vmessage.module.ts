import { NgModule } from '@angular/core';
import { VmessageComponent } from './vmessage.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [VmessageComponent],
  exports: [VmessageComponent],
})
export class VMessageModule { }
