import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChallengeProgressPage } from './challenge-progress.page';

const routes: Routes = [
  {
    path: '',
    component: ChallengeProgressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChallengeProgressPageRoutingModule {}
