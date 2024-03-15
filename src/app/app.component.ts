import { Component } from '@angular/core';
import { PhotoData } from './photos/model/photo';
import { PhotoService } from './photos/service/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = "O leao e o tigrinho"
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

  constructor(private readonly photoService: PhotoService) {
    this.photoService.getUserPhotos('flavio')
      .subscribe(res => {
        this.photos = [];
        res.forEach(photoData => {
          this.photos.push(PhotoData.fromApi(photoData));
        })
      },
        err => console.error(err.message)
      );
  }
}
