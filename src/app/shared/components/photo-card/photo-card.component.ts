import { Component, Input } from '@angular/core';

@Component({
  selector: 'ap-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.css']
})
export class PhotoCardComponent {

  @Input('title')
  title: string = '';

  constructor() { }

}
