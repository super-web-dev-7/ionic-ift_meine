import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ChallengeCancelResultPageRoutingModule } from './challenge-cancel-result-routing.module';
import { ChallengeCancelResultPage } from './challenge-cancel-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChallengeCancelResultPageRoutingModule
  ],
  declarations: [ChallengeCancelResultPage]
})
export class ChallengeCancelResultPageModule {}
