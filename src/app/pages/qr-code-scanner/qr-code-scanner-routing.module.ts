import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QrCodeScannerPage } from './qr-code-scanner.page';

const routes: Routes = [
  {
    path: '',
    component: QrCodeScannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QrCodeScannerPageRoutingModule {}
