import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../../../services/rest/rest.service';
import { GetVideoResponse } from './video.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage {

  id = -1;
  video: GetVideoResponse = {
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
  };

  constructor(
    private rest: RestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ionViewWillEnter() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.getVideo();
  }

  getVideo() {
    return new Promise((resolve, reject) => {
      this.rest.getVideo(this.id)
      .subscribe(
        data => {
          this.video = data;
          console.log('data', this.video);
          resolve(data);
        },
        (err: HttpErrorResponse) => {
          this.rest.handleRestError(err);
          reject(err);
        }
      );
    });
  }

}
