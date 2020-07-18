import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChallengeCancelPage } from './challenge-cancel.page';

const routes: Routes = [
  {
    path: '',
    component: ChallengeCancelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChallengeCancelPageRoutingModule {}
