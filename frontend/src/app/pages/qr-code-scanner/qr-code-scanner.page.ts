import {Component, OnInit} from '@angular/core';
import {MenuController, ToastController} from '@ionic/angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {Router} from '@angular/router';
import {DeviceUUID} from 'device-uuid';

import {CodeService} from '../../providers/code/code.service';
import {HttpService} from '../../providers/http/http.service';
import {DispenseService} from '../../providers/dispense/dispense.service';
// import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@Component({
    selector: 'app-qr-code-scanner',
    templateUrl: './qr-code-scanner.page.html',
    styleUrls: ['./qr-code-scanner.page.scss'],
})

export class QrCodeScannerPage implements OnInit {
    constructor(
        private scanner: BarcodeScanner,
        // private qrScanner: QRScanner,
        private codeService: CodeService,
        private router: Router,
        private menu: MenuController,
        public toastController: ToastController,
        private httpRequest: HttpService,
        private dispenseService: DispenseService

    ) {
    }

    ngOnInit() {
    }

    openMenu() {
        this.menu.enable(true, 'menu')
        this.menu.open('menu')
    }

    async openCameraForScan() {
        const result: any = await this.scanner.scan();
        console.log(result);
        this.codeService.code_check(result.text).subscribe(res => {
            console.log('response>>>> ', res.isExist)
            if (res.isExist === true) {
                this.router.navigate(['/area']);
                this.httpRequest.get_dispenseByDeviceId(new DeviceUUID().get()).subscribe((response: any) => {
                    console.log('dispense>>>>>>>>>>>>>>>>>>>>>>>>', response.result[0]);
                    if (response.result.length > 0) {
                        this.dispenseService.setDispense(response.result[0]);
                        this.router.navigate(['/tagx']);
                    }
                })
            }
            else {
                this.presentToast('Dieser Code ist leider nicht korrekt');
            }
        })
    }

    async presentToast(text) {
        const toast = await this.toastController.create({
            message: text,
            duration: 2000,
            position: 'top',
        });
        toast.present();
    }
}
