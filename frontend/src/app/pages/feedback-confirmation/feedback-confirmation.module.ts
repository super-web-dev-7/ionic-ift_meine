import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FeedbackConfirmationPageRoutingModule } from './feedback-confirmation-routing.module';
import { FeedbackConfirmationPage } from './feedback-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedbackConfirmationPageRoutingModule
  ],
  declarations: [FeedbackConfirmationPage]
})
export class FeedbackConfirmationPageModule {}
