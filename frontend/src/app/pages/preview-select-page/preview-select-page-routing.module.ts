import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreviewSelectPagePage } from './preview-select-page.page';

const routes: Routes = [
  {
    path: '',
    component: PreviewSelectPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreviewSelectPagePageRoutingModule {}
