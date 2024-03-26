import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import * as Tracer from 'stacktrace-js';
import { LogServerClient } from './log-server-client';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private injector: Injector
  ) { }

  handleError(error: any): void {
    const logServerClient = this.injector.get(LogServerClient);

    const location = this.injector.get(LocationStrategy);
    const url = location instanceof PathLocationStrategy
      ? location.path()
      : '';

    const authService = this.injector.get(AuthService);
    const user = authService.getUsername();


    const message = error.message ? error.message : error.toString();
    Tracer.fromError(error)
      .then(stackFrames => {
        const stackAsString = stackFrames.map(st => st.toString()).join('\n');
        console.error(message);
        console.error(stackAsString);

        logServerClient.log({
          message, url, stack: stackAsString, userName: user
        })
          .subscribe(
            () => console.log('Error logged successfully'),
            err => {
              console.error(err);
              console.log('Failed to send log to server');
            }
          );
      });
  }
}
