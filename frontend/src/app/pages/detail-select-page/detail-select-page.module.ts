import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailSelectPagePageRoutingModule } from './detail-select-page-routing.module';

import { DetailSelectPagePage } from './detail-select-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailSelectPagePageRoutingModule
  ],
  declarations: [DetailSelectPagePage]
})
export class DetailSelectPagePageModule {}
