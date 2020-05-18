import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntensityPage } from './intensity.page';

const routes: Routes = [
  {
    path: '',
    component: IntensityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntensityPageRoutingModule {}
