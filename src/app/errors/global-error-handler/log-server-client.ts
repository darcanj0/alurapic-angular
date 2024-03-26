import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerLog } from './server-log';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class LogServerClient {
  /**
   *
   */
  constructor(
    private client: HttpClient
  ) { }

  log(log: ServerLog) {
    return this.client.post(`${environment.LOG_SERVER_URL}/infra/log`, log);
  }
}
