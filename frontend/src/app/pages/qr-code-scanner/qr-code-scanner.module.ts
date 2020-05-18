import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrCodeScannerPageRoutingModule } from './qr-code-scanner-routing.module';

import { QrCodeScannerPage } from './qr-code-scanner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrCodeScannerPageRoutingModule
  ],
  declarations: [QrCodeScannerPage]
})
export class QrCodeScannerPageModule {}
