import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PhotoData } from '../../model/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {
  @Input() photos: PhotoData[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.photos)
      this.rows = this.groupCols(this.photos);
  }

  groupCols(photos: PhotoData[]): any[] {
    const newRows = [];
    for (let index = 0; index < photos.length; index += 3) {
      newRows.push(photos.slice(index, index + 3));
    }
    return newRows;
  }

}
