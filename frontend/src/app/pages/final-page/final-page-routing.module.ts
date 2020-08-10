import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalPagePage } from './final-page.page';

const routes: Routes = [
  {
    path: '',
    component: FinalPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalPagePageRoutingModule {}
