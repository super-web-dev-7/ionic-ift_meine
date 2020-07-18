import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChallengeProgressPageRoutingModule } from './challenge-progress-routing.module';

import { ChallengeProgressPage } from './challenge-progress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChallengeProgressPageRoutingModule
  ],
  declarations: [ChallengeProgressPage]
})
export class ChallengeProgressPageModule {}
