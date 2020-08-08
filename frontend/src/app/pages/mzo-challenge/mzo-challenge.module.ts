import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MzoChallengePageRoutingModule } from './mzo-challenge-routing.module';
import { MzoChallengePage } from './mzo-challenge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MzoChallengePageRoutingModule
  ],
  declarations: [MzoChallengePage]
})
export class MzoChallengePageModule {}
