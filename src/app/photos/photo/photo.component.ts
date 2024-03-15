import { Component, Input } from "@angular/core";

@Component({
  selector: 'ap-photo',
  templateUrl: 'photo.component.html'
})
export class PhotoComponent {
  @Input()
  description: String = 'Lion';

  @Input()
  url = 'https://th.bing.com/th/id/OIP.Xj_XB9KGp8Oon6kxGo69OgHaE-?rs=1&pid=ImgDetMain';
}
