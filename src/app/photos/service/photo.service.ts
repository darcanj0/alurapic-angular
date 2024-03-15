import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class PhotoService {
  private usernamePhotos(username: string): string {
    return `http://localhost:3000/${username}/photos`;
  }

  constructor(private client: HttpClient) { }

  getUserPhotos(username: string): Observable<any[]> {
    return this.client.get<any[]>(this.usernamePhotos(username));
  }
}
