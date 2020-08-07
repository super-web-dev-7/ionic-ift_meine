import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeforeFeedbackPageRoutingModule } from './before-feedback-routing.module';

import { BeforeFeedbackPage } from './before-feedback.page';
import {NgCircleProgressModule} from "ng-circle-progress";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        BeforeFeedbackPageRoutingModule,
        NgCircleProgressModule
    ],
  declarations: [BeforeFeedbackPage]
})
export class BeforeFeedbackPageModule {}
