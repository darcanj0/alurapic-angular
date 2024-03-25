export class Notification {
  private constructor(
    public readonly type: NotificationType,
    public readonly message: string
  ) {
  }

  public static success(message: string): Notification {
    return new Notification(NotificationType.SUCCESS, message);
  }

  public static info(message: string): Notification {
    return new Notification(NotificationType.INFO, message);
  }

  public static danger(message: string): Notification {
    return new Notification(NotificationType.DANGER, message);
  }

  public static warning(message: string): Notification {
    return new Notification(NotificationType.WARNING, message);
  }

}

export enum NotificationType {
  SUCCESS,
  WARNING,
  DANGER,
  INFO
}
