import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChallengeCancelPageRoutingModule } from './challenge-cancel-routing.module';

import { ChallengeCancelPage } from './challenge-cancel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChallengeCancelPageRoutingModule
  ],
  declarations: [ChallengeCancelPage]
})
export class ChallengeCancelPageModule {}
