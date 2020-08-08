import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MenuController} from '@ionic/angular';

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
