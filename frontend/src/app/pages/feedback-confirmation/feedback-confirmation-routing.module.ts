import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedbackConfirmationPage } from './feedback-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: FeedbackConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedbackConfirmationPageRoutingModule {}
