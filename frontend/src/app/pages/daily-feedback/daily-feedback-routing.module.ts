import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyFeedbackPage } from './daily-feedback.page';

const routes: Routes = [
  {
    path: '',
    component: DailyFeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyFeedbackPageRoutingModule {}
