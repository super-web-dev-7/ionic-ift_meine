import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MzoChallengePage } from './mzo-challenge.page';

const routes: Routes = [
  {
    path: '',
    component: MzoChallengePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MzoChallengePageRoutingModule {}
