import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaqPage } from './taq.page';

const routes: Routes = [
  {
    path: '',
    component: TaqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaqPageRoutingModule {}
