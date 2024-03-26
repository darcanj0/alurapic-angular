import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { RequestInterceptorService } from './auth/request-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { NotificationModule } from '../shared/components/notification/notification.module';
import { LoadingModule } from '../shared/components/loading/loading.module';
import { MenuModule } from '../shared/components/menu/menu.module';
import { SharedDirectivesModule } from '../shared/directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    NotificationModule,
    LoadingModule,
    MenuModule,
    SharedDirectivesModule,
    RouterModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true
    }
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class CoreModule { }
