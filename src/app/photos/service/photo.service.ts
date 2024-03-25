import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PhotoData, PhotoProps } from "../model/photo";
import EnvVariables from 'src/app/config/http';

@Injectable({ providedIn: 'root' })
export class PhotoService {
  private usernamePhotos(username: string): string {
    return `${EnvVariables.API_BASE_URL}${username}/photos`;
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
      EnvVariables.API_BASE_URL + 'photos/upload',
      formData
    );
  }

  findById(photoId: number): Observable<PhotoProps> {
    return this.client.get<any>(`${EnvVariables.API_BASE_URL}photos/${photoId}`);
  }

  getPhotoComments(photoId: number) {
    return this.client.get<Comment[]>(`${EnvVariables.API_BASE_URL}photos/${photoId}/comments`);
  }

  addComment(photoId: number, comment: string) {
    return this.client.post(`${EnvVariables.API_BASE_URL}photos/${photoId}/comments`, {
      commentText: comment,
    });
  }

  deletePhoto(photoId: number) {
    return this.client.delete(EnvVariables.API_BASE_URL + 'photos/' + photoId);
  }
}
