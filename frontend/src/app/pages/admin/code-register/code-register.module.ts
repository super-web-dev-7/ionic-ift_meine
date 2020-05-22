import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';

import {CodeRegisterPageRoutingModule} from './code-register-routing.module';

import {CodeRegisterPage} from './code-register.page';
import {CodeRegisterComponent} from './Create/code-register.component';
import {MatSelectModule} from "@angular/material/select";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CodeRegisterPageRoutingModule,
        MatFormFieldModule,
        MatTableModule,
        MatInputModule,
        MatSortModule,
        MatPaginatorModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatSelectModule
    ],
    declarations: [
        CodeRegisterPage,
        CodeRegisterComponent
    ],
    entryComponents: [
        CodeRegisterComponent
    ]
})
export class CodeRegisterPageModule {
}
