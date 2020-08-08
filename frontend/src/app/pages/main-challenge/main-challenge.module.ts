import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MainChallengePageRoutingModule } from './main-challenge-routing.module';
import { MainChallengePage } from './main-challenge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainChallengePageRoutingModule
  ],
  declarations: [MainChallengePage]
})
export class MainChallengePageModule {}
