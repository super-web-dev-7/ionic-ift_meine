import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { IntensityPageRoutingModule } from './intensity-routing.module';
import { IntensityPage } from './intensity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntensityPageRoutingModule
  ],
  declarations: [IntensityPage]
})
export class IntensityPageModule {}
