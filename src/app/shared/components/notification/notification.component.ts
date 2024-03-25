import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';
import { Notification, NotificationType } from './notification';

@Component({
  selector: 'ap-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  @Input()
  timeout = 3000;

  notifications: Notification[] = [];

  constructor(
    private readonly service: NotificationService
  ) {
    this.service.notifications()
      .subscribe(notification => {
        if (!notification) {
          this.notifications = [];
          return;
        }
        this.notifications.push(notification);
        setTimeout(() => this.removeNotification(notification), this.timeout);
      });
  }

  removeNotification(notificationToRemove: Notification) {
    this.notifications = this.notifications
      .filter(
        notif => notif != notificationToRemove
      );
  }

  getNotificationClass(notification: Notification) {
    if (!notification) return '';

    switch (notification.type) {

      case NotificationType.DANGER:
        return 'alert alert-danger';
      case NotificationType.INFO:
        return 'alert alert-info';
      case NotificationType.SUCCESS:
        return 'alert alert-success';
      case NotificationType.WARNING:
        return 'alert alert-warning';

    }
  }

  ngOnInit() {
  }

}
