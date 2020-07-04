import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoExplainationPage } from './video-explaination.page';

const routes: Routes = [
  {
    path: '',
    component: VideoExplainationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoExplainationPageRoutingModule {}
