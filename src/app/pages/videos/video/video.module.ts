import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VideoPage } from './video.page';

import { VideoPageRoutingModule } from './video-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    VideoPageRoutingModule
  ],
  declarations: [VideoPage]
})
export class VideoPageModule {}
