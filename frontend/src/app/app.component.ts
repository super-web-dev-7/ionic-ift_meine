import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {CodeService} from './providers/code/code.service';

export interface Code {
    isExist: boolean,
    isAdmin: boolean
}

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    public selectedIndex = 0;
    public appPages = [
        {
            title: 'Impressum',
            url: '/impressum',
            icon: 'mail'
        },
        {
            title: 'Datenschutz',
            url: '/datenschutz',
            icon: 'paper-plane'
        },
        {
            title: 'FAQ',
            url: '/faq',
            icon: 'heart'
        }
    ];
    public adminPages = [
        {
            title: 'Dashboard',
            url: '/admin',
            icon: 'grid'
        },
        {
            title: 'Daten',
            url: '/admin/daten',
            icon: 'calendar'
        },
        {
            title: 'Codes',
            url: '/admin/code-register',
            icon: 'calendar'
        },
        {
            title: 'QR Codes',
            url: '/admin/qrcode-register',
            icon: 'qr-code'
        }
    ];
    public currentCode: Code;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private codeService: CodeService
    ) {
        console.log('current code >>>>>>>>> ', this.currentCode);
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    ngOnInit() {
        this.codeService.currentCodeSubject.subscribe((currentCode: any) => {
            this.currentCode = currentCode;
        });
        const path = window.location.pathname.split('folder/')[1];
        if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
        }
    }
}
