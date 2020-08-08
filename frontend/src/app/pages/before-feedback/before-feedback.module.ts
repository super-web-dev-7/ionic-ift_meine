import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {NgCircleProgressModule} from 'ng-circle-progress';

import { BeforeFeedbackPageRoutingModule } from './before-feedback-routing.module';
import { BeforeFeedbackPage } from './before-feedback.page';


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
