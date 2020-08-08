import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MissingFeedbackPageRoutingModule } from './missing-feedback-routing.module';
import { MissingFeedbackPage } from './missing-feedback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MissingFeedbackPageRoutingModule
  ],
  declarations: [MissingFeedbackPage]
})
export class MissingFeedbackPageModule {}
