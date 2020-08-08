import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TagxPageRoutingModule } from './tagx-routing.module';
import { TagxPage } from './tagx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TagxPageRoutingModule
  ],
  declarations: [TagxPage]
})
export class TagxPageModule {}
