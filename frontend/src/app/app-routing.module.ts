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
                path: 'backup',
                loadChildren: () => import('./pages/backup/backup.module').then(m => m.BackupPageModule)
            },
            {
                path: 'forgot',
                loadChildren: () => import('./pages/forgot/forgot.module').then(m => m.ForgotPageModule)
            },
            {
                path: 'privacy',
                loadChildren: () => import('./pages/privacy/privacy.module').then( m => m.PrivacyPageModule)
              },
        ]
    },
    {
        path: '',
        children: [
            {
                path: 'video-guide',
                loadChildren: () => import('./pages/video-explaination/video-explaination.module')
                    .then(m => m.VideoExplainationPageModule)
            },
            {
                path: 'category-select',
                loadChildren: () => import('./pages/category-select/category-select.module').then(m => m.CategorySelectPageModule)
            },
            {
                path: 'another-select-page',
                loadChildren: () => import('./pages/another-select-page/another-select-page.module')
                    .then(m => m.AnotherSelectPagePageModule)
            },
            {
                path: 'detail-select-page',
                loadChildren: () => import('./pages/detail-select-page/detail-select-page.module').then(m => m.DetailSelectPagePageModule)
            },
            {
                path: 'preview-select-page',
                loadChildren: () => import('./pages/preview-select-page/preview-select-page.module')
                    .then(m => m.PreviewSelectPagePageModule)
            },
            {
                path: 'before-feedback',
                loadChildren: () => import('./pages/before-feedback/before-feedback.module').then(m => m.BeforeFeedbackPageModule)
            },
            {
                path: 'daily-feedback',
                loadChildren: () => import('./pages/daily-feedback/daily-feedback.module').then(m => m.DailyFeedbackPageModule)
            },
            {
                path: 'after-feedback',
                loadChildren: () => import('./pages/after-feedback/after-feedback.module').then(m => m.AfterFeedbackPageModule)
            },
            {
                path: 'challenge-progress',
                loadChildren: () => import('./pages/challenge-progress/challenge-progress.module').then(m => m.ChallengeProgressPageModule)
            },
            {
                path: 'challenge-cancel',
                loadChildren: () => import('./pages/challenge-cancel/challenge-cancel.module')
                    .then( m => m.ChallengeCancelPageModule)
            },
            {
                path: 'challenge-cancel-result',
                loadChildren: () => import('./pages/challenge-cancel-result/challenge-cancel-result.module')
                    .then(m => m.ChallengeCancelResultPageModule)
            },
            {
                path: 'missing-feedback',
                loadChildren: () => import('./pages/missing-feedback/missing-feedback.module').then(m => m.MissingFeedbackPageModule)
            },
            {
                path: 'mzo-challenge',
                loadChildren: () => import('./pages/mzo-challenge/mzo-challenge.module').then(m => m.MzoChallengePageModule)
            },
            {
                path: 'final-page',
                loadChildren: () => import('./pages/final-page/final-page.module').then(m => m.FinalPagePageModule)
            },
        ],
        canActivate: [AuthGuard],
        data: {isAdmin: false}
    },
    {
        path: 'admin',
        loadChildren: () => import('./pages/admin/dashboard/dashboard.module').then(m => m.DashboardPageModule),
        canActivate: [AuthGuard],
        data: {isAdmin: true}
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
