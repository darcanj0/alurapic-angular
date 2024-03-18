import { Component, Input, OnInit } from '@angular/core';
import { PhotoData } from '../../model/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  @Input() photos: PhotoData[] = [];

  constructor() { }

  ngOnInit() {
  }

}
