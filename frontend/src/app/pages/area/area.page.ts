import {Component, OnInit} from '@angular/core';
import {MenuController, ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
import {DeviceUUID} from 'device-uuid'

import {DispenseService} from '../../providers/dispense/dispense.service';
import {HttpService} from '../../providers/http/http.service';


@Component({
    selector: 'app-area',
    templateUrl: './area.page.html',
    styleUrls: ['./area.page.scss'],
})
export class AreaPage implements OnInit {

    topic: any = null;
    ownTopic: any = '';
    isOwn = false;
    isTopic = false;
    deviceId: string;

    constructor(
        private menu: MenuController,
        private dispenseService: DispenseService,
        private router: Router,
        private toastController: ToastController,
        private httpRequest: HttpService
    ) {
        this.deviceId = new DeviceUUID().get();
    }

    async ngOnInit() {
        this.httpRequest.get_dispenseByDeviceId(this.deviceId).subscribe((res: any) => {
            console.log(res.result[0]);
        })
    }

    openMenu() {
        this.menu.enable(true, 'menu');
        this.menu.open('menu')
    }

    onChange() {
        if ((this.topic === null || this.topic === 'none') && this.ownTopic === '') {
            this.isOwn = false;
            this.isTopic = false;
        }

        if (this.topic !== null && this.topic !== 'none') {
            this.ownTopic = '';
            this.isOwn = true;
            this.isTopic = false;
        }

        if (this.ownTopic !== '') {
            this.topic = null;
            this.isOwn = false;
            this.isTopic = true;
        }
        console.log(this.topic)
        console.log(this.ownTopic)
    }

    async saveTopic() {

        if (this.isOwn === false && this.isTopic === false) {
            this.presentToast('Please input your topic you want.');
            return;
        }

        let topic;
        if (this.ownTopic === '') {
            topic = this.topic;
        } else {
            topic = this.ownTopic;
        }

        const dispense = {
            DeviceId: this.deviceId,
            Topic: topic,
            Intensity: 100
        };

        console.log(dispense)

        await this.dispenseService.setDispense(dispense);
        await this.router.navigate(['/intensity']);
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
