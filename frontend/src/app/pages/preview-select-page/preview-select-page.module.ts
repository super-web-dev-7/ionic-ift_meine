import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviewSelectPagePageRoutingModule } from './preview-select-page-routing.module';

import { PreviewSelectPagePage } from './preview-select-page.page';
import {NgCircleProgressModule} from "ng-circle-progress";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PreviewSelectPagePageRoutingModule,
        NgCircleProgressModule
    ],
  declarations: [PreviewSelectPagePage]
})
export class PreviewSelectPagePageModule {}
