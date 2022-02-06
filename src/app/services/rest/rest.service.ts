import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetVideosResponse } from '../../pages/videos/videos.model';
import { environment } from '../../../environments/environment';
import { GetVideoResponse } from '../../pages/videos/video/video.model';

@Injectable({
    providedIn: 'root'
})
export class RestService {
    public apiUrl = environment.dnn.apiUrl;

    constructor(public http: HttpClient) {}

    public getVideos(): Observable<GetVideosResponse> {
        return this.http.get<GetVideosResponse>(
            this.apiUrl + 'Video/Get');
    }

    public getVideo(id: number): Observable<GetVideoResponse> {
      return this.http.get<GetVideoResponse>(
          this.apiUrl + `Video/Get?id=${id}`);
  }

  public handleRestError(err: HttpErrorResponse) {
        if (err.error instanceof Error) {
          // A client-side or network error occurred.
          console.log('An error occurred:', err.error.message);
        } else {
          // Backend returns unsuccessful response codes such as 404, 500 etc.
          console.log('Backend returned status code: ', err.status);
          console.log('Response body:', err.error);
        }
    }
}

