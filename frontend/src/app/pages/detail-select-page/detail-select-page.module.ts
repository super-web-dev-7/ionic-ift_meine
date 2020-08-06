import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

import { DetailSelectPagePageRoutingModule } from './detail-select-page-routing.module';
import { DetailSelectPagePage } from './detail-select-page.page';
import {InputNumberComponent} from '../../component/input-number/input-number.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DetailSelectPagePageRoutingModule,
        MatFormFieldModule,
        MatSelectModule,
    ],
  declarations: [DetailSelectPagePage, InputNumberComponent]
})
export class DetailSelectPagePageModule {}
