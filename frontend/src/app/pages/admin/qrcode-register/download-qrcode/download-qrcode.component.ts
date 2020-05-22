import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
    selector: 'app-download-qrcode',
    templateUrl: './download-qrcode.component.html',
    styleUrls: ['./download-qrcode.component.scss'],
})
export class DownloadQrcodeComponent implements OnInit {

    value: string;
    href: string;

    constructor(
        private navParams: NavParams,
        private modalCtrl: ModalController,
    ) { }

    ngOnInit() {
        this.value = this.navParams.data.value;
    }

    download() {
        this.href = this.href = document.getElementsByTagName('img')[0].src;
        this.modalCtrl.dismiss(null);
    }

    closeModal() {
        this.modalCtrl.dismiss(null);
    }

}
