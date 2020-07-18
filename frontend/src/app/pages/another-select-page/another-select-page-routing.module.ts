import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnotherSelectPagePage } from './another-select-page.page';

const routes: Routes = [
  {
    path: '',
    component: AnotherSelectPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnotherSelectPagePageRoutingModule {}
