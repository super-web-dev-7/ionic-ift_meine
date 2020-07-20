import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MenuController, ToastController} from '@ionic/angular';
import {first} from 'rxjs/operators';
import {DeviceUUID} from 'device-uuid';

import {CodeService} from '../../providers/code/code.service';
import {HttpService} from '../../providers/http/http.service';
import {DispenseService} from '../../providers/dispense/dispense.service';

@Component({
    selector: 'app-forgot',
    templateUrl: './forgot.page.html',
    styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

    message: any = '';

    constructor(
        public router: Router,
        public menu: MenuController,
    ) {
    }

    ngOnInit() {
    }

    openMenu() {
        this.menu.enable(true, 'menu');
        this.menu.open('menu');
    }

    open_mailApp() {
        window.location.href = 'mailto:mzo@ift-nord.de?subject=' + this.message + '&body=';
    }
}
