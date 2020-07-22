import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MissingFeedbackPage } from './missing-feedback.page';

const routes: Routes = [
  {
    path: '',
    component: MissingFeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissingFeedbackPageRoutingModule {}
