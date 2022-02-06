import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../../services/rest/rest.service';
import { GetVideosResponse } from './videos.model';

@Component({
  selector: 'app-videos',
  templateUrl: 'videos.page.html',
  styleUrls: ['videos.page.scss']
})
export class VideosPage {

  videos: GetVideosResponse = {
    paging: [{
      itemCount: -1,
      pageCount: -1,
      pageNumber: -1,
      pageSize: -1
    }],
    videos: [{
      id: -1,
      title: '',
      date: '',
      summary: '',
      image: '',
      showNotes: '',
      youTubeId: '',
      relatedVideos: [{
        id: -1,
        title: '',
        date: '',
        summary: '',
        image: '',
        showNotes: '',
        youTubeId: '',
        relatedVideos: []
      }]
    }]
  };

  constructor(
    private rest: RestService,
    private router: Router
  ) { }

  ionViewWillEnter() {
    this.getVideos();
  }

  getVideos() {
    return new Promise((resolve, reject) => {
      this.rest.getVideos()
      .subscribe(
        data => {
          this.videos = data;
          console.log('data', this.videos);
          resolve(data);
        },
        (err: HttpErrorResponse) => {
          this.rest.handleRestError(err);
          reject(err);
        }
      );
    });
  }

  videoDetail(id: number) {
    this.router.navigateByUrl('/tabs/videos/' + id);
    console.log('id', id);
  }

}
