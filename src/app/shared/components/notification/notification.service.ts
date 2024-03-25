import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Notification } from './notification';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private notificationSubject: Subject<Notification> = new Subject();

  notify(notification: Notification): void {
    this.notificationSubject.next(notification);
  }

  notifications(): Observable<Notification> {
    return this.notificationSubject.asObservable();
  }
}
