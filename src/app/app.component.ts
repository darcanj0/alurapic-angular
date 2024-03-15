import { Component } from '@angular/core';
import { PhotoData } from './photos/model/photo';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String = "O leao e o tigrinho"
  photos: PhotoData[] = [
    new PhotoData(
      'https://th.bing.com/th/id/OIP.Xj_XB9KGp8Oon6kxGo69OgHaE-?rs=1&pid=ImgDetMain',
      'Leao',
    ),
    new PhotoData(
      'https://th.bing.com/th/id/OIP.Xj_XB9KGp8Oon6kxGo69OgHaE-?rs=1&pid=ImgDetMain',
      'Tigrinho',
    )
  ];

  constructor(private readonly client: HttpClient) {
    console.log(client);

  }
}
