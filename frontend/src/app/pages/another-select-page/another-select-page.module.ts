import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnotherSelectPagePageRoutingModule } from './another-select-page-routing.module';

import { AnotherSelectPagePage } from './another-select-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnotherSelectPagePageRoutingModule
  ],
  declarations: [AnotherSelectPagePage]
})
export class AnotherSelectPagePageModule {}
