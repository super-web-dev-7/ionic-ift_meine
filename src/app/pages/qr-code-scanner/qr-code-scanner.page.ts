import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
    selector: 'app-qr-code-scanner',
    templateUrl: './qr-code-scanner.page.html',
    styleUrls: ['./qr-code-scanner.page.scss'],
})
export class QrCodeScannerPage implements OnInit {

    constructor(
        private menu: MenuController
    ) {
    }

    ngOnInit() {
    }

    openMenu() {
        this.menu.enable(true, 'menu')
        this.menu.open('menu')
    }

}
