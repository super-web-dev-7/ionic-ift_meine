import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {CategorySelectPageRoutingModule} from './category-select-routing.module';
import {CategorySelectPage} from './category-select.page';
import {SmokingSelectComponent} from './smoking-select/smoking-select.component';
import {InternetSelectComponent} from './internet-select/internet-select.component';
import {InternetSelectChatComponent} from './internet-select-chat/internet-select-chat.component';
import {InternetSelectStreamComponent} from './internet-select-stream/internet-select-stream.component';
import {InternetSelectSocialComponent} from './internet-select-social/internet-select-social.component';
import {GameSelectComponent} from './game-select/game-select.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CategorySelectPageRoutingModule
    ],
    declarations: [
        CategorySelectPage,
        SmokingSelectComponent,
        InternetSelectComponent,
        InternetSelectChatComponent,
        InternetSelectStreamComponent,
        InternetSelectSocialComponent,
        GameSelectComponent
    ]
})
export class CategorySelectPageModule {
}
