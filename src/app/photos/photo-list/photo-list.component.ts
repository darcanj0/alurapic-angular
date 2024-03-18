import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { PhotoData, PhotoProps } from '../model/photo';
import { PhotoService } from '../service/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  photos: PhotoData[] = [
    // new PhotoData({
    //   authorId: 'id',
    //   allowComments: true,
    //   comments: 0,
    //   likes: 0,
    //   createdAt: new Date(),
    //   description: 'Leao',
    //   id: 'photoId',
    //   url: 'https://th.bing.com/th/id/OIP.Xj_XB9KGp8Oon6kxGo69OgHaE-?rs=1&pid=ImgDetMain'

    // }),
    // new PhotoData({
    //   authorId: 'id',
    //   allowComments: true,
    //   comments: 0,
    //   likes: 0,
    //   createdAt: new Date(),
    //   description: 'Tigrinho',
    //   id: 'photoId',
    //   url: 'https://th.bing.com/th/id/OIP.Xj_XB9KGp8Oon6kxGo69OgHaE-?rs=1&pid=ImgDetMain'
    // })
  ];
  hasMore: boolean = true;
  currentPage: number = 1;
  username: string = '';

  loadMore() {
    this.service.getPaginatedUserPhotos(this.username, ++this.currentPage)
      .subscribe(photosProps => {
        photosProps
          .map(props => PhotoData.fromApi(props))
          .forEach(data => this.photos = [...this.photos, data]);
        if (!photosProps.length) this.hasMore = false;
      });
  }

  searchFilter: string = '';
  debounce: Subject<string> = new Subject<string>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly service: PhotoService,
  ) { }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.params.username;

    this.activatedRoute.snapshot.data.photos.forEach(
      photoProps => this.photos.push(PhotoData.fromApi(photoProps as PhotoProps))
    );

    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.searchFilter = filter);
  }

}
