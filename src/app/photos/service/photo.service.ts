import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { catchError, map } from 'rxjs/operators';
import { PhotoProps } from "../model/photo";
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class PhotoService {
  private usernamePhotos(username: string): string {
    return `${environment.API_BASE_URL}${username}/photos`;
  }

  constructor(
    private client: HttpClient,
  ) { }

  getUserPhotos(username: string): Observable<PhotoProps[]> {
    return this.client.get<any[]>(this.usernamePhotos(username));
  }

  getPaginatedUserPhotos(username: string, page: number): Observable<PhotoProps[]> {
    const params = new HttpParams().append('page', page.toString());
    return this.client.get<any[]>(this.usernamePhotos(username),
      { params }
    );
  }

  upload(description: string, allowComments: boolean, file: File) {
    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);
    return this.client.post(
      environment.API_BASE_URL + 'photos/upload',
      formData,
      { observe: 'events', reportProgress: true }
    );
  }

  findById(photoId: number): Observable<PhotoProps> {
    return this.client.get<any>(`${environment.API_BASE_URL}photos/${photoId}`);
  }

  getPhotoComments(photoId: number) {
    return this.client.get<Comment[]>(`${environment.API_BASE_URL}photos/${photoId}/comments`);
  }

  addComment(photoId: number, comment: string) {
    return this.client.post(`${environment.API_BASE_URL}photos/${photoId}/comments`, {
      commentText: comment,
    });
  }

  like(photoId: number) {
    return this.client.post(`${environment.API_BASE_URL}photos/${photoId}/like`, {}, { observe: 'response' })
      .pipe(
        map(res => true)
      )
      .pipe(
        catchError(
          err => {
            return err.status == '304' ? of(false) : throwError(err);
          }
        )
      );
  }

  deletePhoto(photoId: number) {
    return this.client.delete(environment.API_BASE_URL + 'photos/' + photoId);
  }
}
