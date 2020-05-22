import { Component, OnInit } from '@angular/core';
import {LoadingController, ModalController} from '@ionic/angular';
import {HttpService} from '../../../../providers/http/http.service';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';

@Component({
    selector: 'app-create-qrcode',
    templateUrl: './create-qrcode.component.html',
    styleUrls: ['./create-qrcode.component.scss'],
})
export class CreateQrcodeComponent implements OnInit {

    code: any = null;


    constructor(
        private modalCtrl: ModalController,
        public loadingCtrl: LoadingController,
        private httpRequest: HttpService,
        private scanner: BarcodeScanner,
    ) { }

    ngOnInit() {
    }


    closeModal() {
        this.modalCtrl.dismiss(null);
    }

    async addCode() {
        const loader = await this.loadingCtrl.create({
            duration: 2000
        });

        loader.present();

        const data = {
            code: this.code,
            isAdmin: 0
        };

        this.httpRequest.addCode(data).subscribe(result => {
            this.modalCtrl.dismiss(data);
        });

        loader.onWillDismiss().then(() => {
        });
    }

    async scanQRCode() {
        const result: any = await this.scanner.scan();
        this.code = result.text;
    }

}
