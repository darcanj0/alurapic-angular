import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoService } from '../../service/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ap-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.css']
})
export class PhotoCommentsComponent implements OnInit {

  @Input() photoId: number;

  comments$: Observable<Comment[]>;

  constructor(
    private readonly photoService: PhotoService,
  ) { }

  ngOnInit() {
    this.comments$ = this.photoService.getPhotoComments(this.photoId);
  }

}
