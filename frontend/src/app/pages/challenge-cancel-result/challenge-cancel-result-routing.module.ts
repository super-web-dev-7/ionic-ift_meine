import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChallengeCancelResultPage } from './challenge-cancel-result.page';

const routes: Routes = [
  {
    path: '',
    component: ChallengeCancelResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChallengeCancelResultPageRoutingModule {}
