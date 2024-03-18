import { Pipe, PipeTransform } from '@angular/core';
import { PhotoData } from '../model/photo';

@Pipe({ name: 'filterByDescription' })
export class FilterByDescriptionPipe implements PipeTransform {
  transform(photos: PhotoData[], query: string) {
    query = query.trim().toLowerCase();
    if (query) {
      return photos.filter(photo => photo.description
        .trim()
        .toLowerCase()
        .includes(query)
      );
    } else {
      return photos;
    }
  }
}
