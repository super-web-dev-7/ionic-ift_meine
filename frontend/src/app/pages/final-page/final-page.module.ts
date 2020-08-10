import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalPagePageRoutingModule } from './final-page-routing.module';

import { FinalPagePage } from './final-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinalPagePageRoutingModule
  ],
  declarations: [FinalPagePage]
})
export class FinalPagePageModule {}
