import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TagxPage } from './tagx.page';

const routes: Routes = [
  {
    path: '',
    component: TagxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagxPageRoutingModule {}
