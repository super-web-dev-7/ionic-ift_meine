import {Component, OnInit} from '@angular/core';

import {MenuController, Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {DeviceUUID} from 'device-uuid';

import {CodeService} from './providers/code/code.service';
import {HttpService} from './providers/http/http.service';
import {DispenseService} from './providers/dispense/dispense.service';

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
    public selectedIndex = null;
    public appPages = [
        {
            title: 'Förderer',
            url: '/impressum',
        },
        {
            title: 'Impressum',
            url: '/impressum',
        },
        {
            title: 'Datenschutz',
            url: '/privacy',
        }
    ];

    public appPages2 = [
        {
            title: 'Challenge - Verlauf',
            url: '/challenge-progress',
        },
        {
            title: 'MZo - Erklarvideo',
            url: '/video-guide',
        },
        {
            title: 'MZo - Challenge - Regeln',
            url: '/mzo-challenge',
        },
        {
            title: 'Kontakt',
            url: '/kontakt',
        },
        {
            title: 'Förderer',
            url: '/impressum',
        },
        {
            title: 'Impressum',
            url: '/impressum',
        },
        {
            title: 'Datenschutz',
            url: '/privacy',
        }
    ];

    public appEndPages = [
        {
            title: 'Kontakt',
            url: '/kontakt',
        },
        {
            title: 'Förderer',
            url: '/impressum',
        },
        {
            title: 'Impressum',
            url: '/impressum',
        },
        {
            title: 'Datenschutz',
            url: '/privacy',
        }
    ];

    public menuStatus = 0;

    public adminPages = [
        {
            title: 'Dashboard',
            url: '/admin',
        },
        {
            title: 'Daten',
            url: '/admin/daten',
        },
        {
            title: 'Codes',
            url: '/admin/code-register',
        },
        {
            title: 'QR Codes',
            url: '/admin/qrcode-register',
        }
    ];
    public currentCode: Code;
    public dispense: any;

    constructor(
        public platform: Platform,
        public splashScreen: SplashScreen,
        public statusBar: StatusBar,
        public codeService: CodeService,
        public httpRequest: HttpService,
        public dispenseService: DispenseService,
        public menu: MenuController,
    ) {
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
        this.dispenseService.dispenseSubject.subscribe((val: any) => {
            this.menuStatus = val?.day_after > 0 ? 1 : 0;
        })
    }

    ionViewWillEnter() {
        const path = window.location.pathname.split('folder/')[1];
        if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
        }
        // const deviceId = new DeviceUUID().get();
        // this.httpRequest.get_dispenseByDeviceId(deviceId).subscribe((res: any) => {
        //     if (res.result.length > 0 && res.result[0].day_after > 0) {
        //         this.menuStatus = 1;
        //     }
        // })
    }

    closeMenu() {
        this.menu.close('menu')
    }
}
