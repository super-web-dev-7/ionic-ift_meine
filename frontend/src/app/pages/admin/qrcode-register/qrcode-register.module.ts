import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrcodeRegisterPageRoutingModule } from './qrcode-register-routing.module';

import { QrcodeRegisterPage } from './qrcode-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrcodeRegisterPageRoutingModule
  ],
  declarations: [QrcodeRegisterPage]
})
export class QrcodeRegisterPageModule {}
