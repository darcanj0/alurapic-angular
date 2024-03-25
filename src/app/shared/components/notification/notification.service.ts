import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Notification } from './notification';
import { NavigationStart, Router } from '@angular/router';
import { clear } from 'console';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      const isNavigationStart = event instanceof NavigationStart;
      if (isNavigationStart) {
        this.keepAfterNavigation ? this.disableKeep() : this.clear();
      }
    });
  }

  private disableKeep(): void {
    this.keepAfterNavigation = false;
  }

  private clear(): void {
    this.notificationSubject.next(null);
  }

  private notificationSubject: Subject<Notification> = new Subject();
  keepAfterNavigation = false;

  notify(notification: Notification, keepAfterNavigation = true): void {
    this.keepAfterNavigation = keepAfterNavigation;
    this.notificationSubject.next(notification);
  }

  notifications(): Observable<Notification> {
    return this.notificationSubject.asObservable();
  }
}
