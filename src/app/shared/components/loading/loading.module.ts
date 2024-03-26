import { NgModule } from '@angular/core';
import { LoadingComponent } from './loading.component';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './loading.interceptor';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [LoadingComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  exports: [LoadingComponent]
})
export class LoadingModule { }
