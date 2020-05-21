import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeRegisterPageRoutingModule } from './code-register-routing.module';

import { CodeRegisterPage } from './code-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodeRegisterPageRoutingModule
  ],
  declarations: [CodeRegisterPage]
})
export class CodeRegisterPageModule {}
