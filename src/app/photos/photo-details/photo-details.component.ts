import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PhotoProps } from '../model/photo';
import { PhotoService } from '../service/photo.service';

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
  ) { }

  ngOnInit() {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
    this.comments$ = this.photoService.getPhotoComments(this.photoId);
  }

}
