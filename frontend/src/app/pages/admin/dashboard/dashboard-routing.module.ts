import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardPage} from './dashboard.page';

const routes: Routes = [
    {
        path: '',
        component: DashboardPage
    },
    {
        path: 'daten',
        loadChildren: () => import('../daten/daten.module').then(m => m.DatenPageModule)
    },
    {
        path: 'code-register',
        loadChildren: () => import('../code-register/code-register.module').then( m => m.CodeRegisterPageModule)
    },
    {
        path: 'qrcode-register',
        loadChildren: () => import('../qrcode-register/qrcode-register.module').then( m => m.QrcodeRegisterPageModule)
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardPageRoutingModule {
}
