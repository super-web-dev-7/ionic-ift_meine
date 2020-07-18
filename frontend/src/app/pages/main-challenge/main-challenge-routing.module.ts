import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainChallengePage } from './main-challenge.page';

const routes: Routes = [
  {
    path: '',
    component: MainChallengePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainChallengePageRoutingModule {}
