import { Component, Input } from "@angular/core";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ap-photo',
  templateUrl: 'photo.component.html'
})
export class PhotoComponent {
  @Input()
  description: String = 'Lion';

  private _url = 'https://th.bing.com/th/id/OIP.Xj_XB9KGp8Oon6kxGo69OgHaE-?rs=1&pid=ImgDetMain';

  public get url() {
    return this._url;
  }

  @Input()
  public set url(value) {
    const notDataUri = !value.startsWith('data');
    if (notDataUri) {
      this._url = environment.API_BASE_URL + 'imgs/' + value;
    } else {
      this._url = value;
    }
  }
}
