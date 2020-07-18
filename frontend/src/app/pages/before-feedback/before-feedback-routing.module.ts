import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeforeFeedbackPage } from './before-feedback.page';

const routes: Routes = [
  {
    path: '',
    component: BeforeFeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeforeFeedbackPageRoutingModule {}
