import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyFeedbackPageRoutingModule } from './daily-feedback-routing.module';

import { DailyFeedbackPage } from './daily-feedback.page';
import {NgCircleProgressModule} from "ng-circle-progress";

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
