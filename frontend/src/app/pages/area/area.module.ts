import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AreaPageRoutingModule} from './area-routing.module';

import {AreaPage} from './area.page';
import {MaterialModule} from '../../material.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AreaPageRoutingModule,
        ReactiveFormsModule,
        MaterialModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule
    ],
    declarations: [AreaPage]
})
export class AreaPageModule {
}
