import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PhotoData, PhotoProps } from '../model/photo';
import { PhotoService } from '../service/photo.service';

@Injectable({ providedIn: 'root' })
export class PhotoListResolver implements Resolve<Observable<PhotoProps[]>> {
  constructor(private service: PhotoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PhotoProps[]> | Observable<Observable<PhotoProps[]>> | Promise<Observable<PhotoProps[]>> {
    const username = route.params.username;
    return this.service.getPaginatedUserPhotos(username, 1);
  }

}
