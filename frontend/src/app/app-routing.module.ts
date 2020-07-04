import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './providers/helper/auth.guard';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
            },
            {
                path: 'qr-code-scanner',
                loadChildren: () => import('./pages/qr-code-scanner/qr-code-scanner.module').then(m => m.QrCodeScannerPageModule)
            },
            {
                path: 'forgot',
                loadChildren: () => import('./pages/forgot/forgot.module').then(m => m.ForgotPageModule)
            }
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'area',
                loadChildren: () => import('./pages/area/area.module').then(m => m.AreaPageModule)
            },
            {
                path: 'intensity',
                loadChildren: () => import('./pages/intensity/intensity.module').then(m => m.IntensityPageModule)
            },
            {
                path: 'summary',
                loadChildren: () => import('./pages/summary/summary.module').then(m => m.SummaryPageModule)
            },
            {
                path: 'taq',
                loadChildren: () => import('./pages/taq/taq.module').then(m => m.TaqPageModule)
            },

            {
                path: 'tagx',
                loadChildren: () => import('./pages/tagx/tagx.module').then(m => m.TagxPageModule)
            },
            {
                path: 'feedback',
                loadChildren: () => import('./pages/feedback/feedback.module').then(m => m.FeedbackPageModule)
            },
            {
                path: 'feedback-confirmation',
                loadChildren: () => import('./pages/feedback-confirmation/feedback-confirmation.module')
                    .then(m => m.FeedbackConfirmationPageModule)
            },
            {
                path: 'video-guide',
                loadChildren: () => import('./pages/video-explaination/video-explaination.module')
                    .then(m => m.VideoExplainationPageModule)
            }
        ],
        canActivate: [AuthGuard],
        data: {isAdmin: false}
    },
    {
        path: 'admin',
        loadChildren: () => import('./pages/admin/dashboard/dashboard.module').then(m => m.DashboardPageModule),
        canActivate: [AuthGuard],
        data: {isAdmin: true}
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
