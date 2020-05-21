import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeRegisterPage } from './code-register.page';

const routes: Routes = [
  {
    path: '',
    component: CodeRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeRegisterPageRoutingModule {}
