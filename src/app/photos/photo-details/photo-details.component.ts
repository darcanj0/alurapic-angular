import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PhotoProps } from '../model/photo';
import { PhotoService } from '../service/photo.service';
import { NotificationService } from 'src/app/shared/components/notification/notification.service';
import { Notification } from 'src/app/shared/components/notification/notification';

@Component({
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<PhotoProps>;
  comments$: Observable<Comment[]>;

  photoId: number;

  constructor(
    private route: ActivatedRoute,
    private readonly photoService: PhotoService,
    private router: Router,
    private notificationService: NotificationService,
  ) { }

  ngOnInit() {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
    this.comments$ = this.photoService.getPhotoComments(this.photoId);
  }

  deletePhoto() {
    this.photoService.deletePhoto(this.photoId)
      .subscribe(() => {
        this.notificationService.notify(Notification.success('Photo removed'));
        this.router.navigate(['']);
      },
        err => {
          console.error(err);
          this.notificationService.notify(Notification.warning('Could not delete the photo!'));
        }
      );
  }

}
