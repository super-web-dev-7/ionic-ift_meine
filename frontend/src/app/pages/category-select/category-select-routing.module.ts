import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CategorySelectPage} from './category-select.page';
import {SmokingSelectComponent} from './smoking-select/smoking-select.component';
import {InternetSelectComponent} from './internet-select/internet-select.component';
import {InternetSelectChatComponent} from './internet-select-chat/internet-select-chat.component';
import {InternetSelectStreamComponent} from './internet-select-stream/internet-select-stream.component';
import {InternetSelectSocialComponent} from './internet-select-social/internet-select-social.component';
import {GameSelectComponent} from './game-select/game-select.component';

const routes: Routes = [
    {
        path: '',
        component: CategorySelectPage
    },
    {
        path: 'smoking',
        component: SmokingSelectComponent
    },
    {
        path: 'internet',
        component: InternetSelectComponent
    },
    {
        path: 'internet/chat',
        component: InternetSelectChatComponent
    },
    {
        path: 'internet/stream',
        component: InternetSelectStreamComponent
    },
    {
        path: 'internet/social',
        component: InternetSelectSocialComponent
    },
    {
        path: 'game',
        component: GameSelectComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategorySelectPageRoutingModule {
}
