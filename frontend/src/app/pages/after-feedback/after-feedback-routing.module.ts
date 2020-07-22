import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfterFeedbackPage } from './after-feedback.page';

const routes: Routes = [
  {
    path: ':day',
    component: AfterFeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfterFeedbackPageRoutingModule {}
