import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatenPageRoutingModule } from './daten-routing.module';

import { DatenPage } from './daten.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatenPageRoutingModule
  ],
  declarations: [DatenPage]
})
export class DatenPageModule {}
