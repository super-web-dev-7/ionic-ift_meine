import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrcodeRegisterPage } from './qrcode-register.page';

const routes: Routes = [
  {
    path: '',
    component: QrcodeRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrcodeRegisterPageRoutingModule {}
