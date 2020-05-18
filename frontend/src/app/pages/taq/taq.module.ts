import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaqPageRoutingModule } from './taq-routing.module';

import { TaqPage } from './taq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaqPageRoutingModule
  ],
  declarations: [TaqPage]
})
export class TaqPageModule {}
