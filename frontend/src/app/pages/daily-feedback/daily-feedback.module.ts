import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {NgCircleProgressModule} from 'ng-circle-progress';

import { DailyFeedbackPageRoutingModule } from './daily-feedback-routing.module';
import { DailyFeedbackPage } from './daily-feedback.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DailyFeedbackPageRoutingModule,
        NgCircleProgressModule
    ],
  declarations: [DailyFeedbackPage]
})
export class DailyFeedbackPageModule {}
