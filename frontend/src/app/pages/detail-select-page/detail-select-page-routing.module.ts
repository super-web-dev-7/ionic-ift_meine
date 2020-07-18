import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailSelectPagePage } from './detail-select-page.page';

const routes: Routes = [
  {
    path: '',
    component: DetailSelectPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailSelectPagePageRoutingModule {}
