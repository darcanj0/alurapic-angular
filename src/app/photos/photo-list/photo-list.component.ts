import { Component, OnInit } from '@angular/core';
import { PhotoData } from '../model/photo';
import { PhotoService } from '../service/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: PhotoData[] = [
    new PhotoData({
      authorId: 'id',
      allowComments: true,
      comments: 0,
      likes: 0,
      createdAt: new Date(),
      description: 'Leao',
      id: 'photoId',
      url: 'https://th.bing.com/th/id/OIP.Xj_XB9KGp8Oon6kxGo69OgHaE-?rs=1&pid=ImgDetMain'

    }),
    new PhotoData({
      authorId: 'id',
      allowComments: true,
      comments: 0,
      likes: 0,
      createdAt: new Date(),
      description: 'Tigrinho',
      id: 'photoId',
      url: 'https://th.bing.com/th/id/OIP.Xj_XB9KGp8Oon6kxGo69OgHaE-?rs=1&pid=ImgDetMain'
    })
  ];

  constructor(
    private readonly photoService: PhotoService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.photoService.getUserPhotos(this.activatedRoute.snapshot.params.username)
      .subscribe(res => {
        this.photos = [];
        res.forEach(props => {
          this.photos.push(PhotoData.fromApi(props));
        });
      },
        err => console.error(err.message)
      );
  }

}
