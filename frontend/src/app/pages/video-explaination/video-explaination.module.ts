import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { VideoExplainationPageRoutingModule } from './video-explaination-routing.module';
import { VideoExplainationPage } from './video-explaination.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoExplainationPageRoutingModule
  ],
  declarations: [VideoExplainationPage]
})
export class VideoExplainationPageModule {}
