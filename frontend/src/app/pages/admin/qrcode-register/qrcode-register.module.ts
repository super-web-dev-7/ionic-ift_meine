import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';


import {QrcodeRegisterPageRoutingModule} from './qrcode-register-routing.module';

import {QrcodeRegisterPage} from './qrcode-register.page';
import {CreateQrcodeComponent} from './create-qrcode/create-qrcode.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        QrcodeRegisterPageRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatSortModule,
        MatButtonModule,
        MatPaginatorModule,
        ReactiveFormsModule
    ],
    declarations: [
        QrcodeRegisterPage,
        CreateQrcodeComponent
    ],
    entryComponents: [
        CreateQrcodeComponent
    ]
})
export class QrcodeRegisterPageModule {
}
