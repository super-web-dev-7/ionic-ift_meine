import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {NgCircleProgressModule} from 'ng-circle-progress';

import { AfterFeedbackPageRoutingModule } from './after-feedback-routing.module';
import { AfterFeedbackPage } from './after-feedback.page';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AfterFeedbackPageRoutingModule,
        NgCircleProgressModule
    ],
  declarations: [AfterFeedbackPage]
})
export class AfterFeedbackPageModule {}
