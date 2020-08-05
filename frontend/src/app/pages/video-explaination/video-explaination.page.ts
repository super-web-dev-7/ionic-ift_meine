import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoadingController, MenuController} from '@ionic/angular';
import {DeviceUUID} from 'device-uuid';
import {DomSanitizer} from '@angular/platform-browser';

import {HttpService} from '../../providers/http/http.service';
import {DispenseService} from '../../providers/dispense/dispense.service';

@Component({
    selector: 'app-video-explaination',
    templateUrl: './video-explaination.page.html',
    styleUrls: ['./video-explaination.page.scss'],
})
export class VideoExplainationPage implements OnInit {

    topic: any = null;
    deviceId: string;

    video: any = {
        url: 'https://www.youtube.com/embed/MLleDRkSuvk',
        title: 'Awesome video'
    };

    trustedVideoUrl: any = this.getVideoUrl();
    loading: any;
    loaded = false;
    toggleValue: any = false;

    constructor(
        public router: Router,
        public menu: MenuController,
        public loadingCtrl: LoadingController,
        public domSanitizer: DomSanitizer,
        public httpRequest: HttpService,
        public dispenseService: DispenseService
    ) {
        this.deviceId = new DeviceUUID().get();
    }

    async ngOnInit() {
    }

    async ionViewWillEnter() {
        this.toggleValue = false;
        // this.loading = await this.loadingCtrl.create({
        // });
        // if (!this.loaded) {
        //     this.loading.present();
        // }
    }

    getVideoUrl() {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);
    }

    openMenu() {
        this.menu.enable(true, 'menu');
        this.menu.open('menu')
    }

    handleIFrameLoadEvent(): void {
        this.loaded = true;
        // this.loading.dismiss();
    }

    gotoArea() {
        this.router.navigate(['/category-select']);
    }

    toggleClick($event: MouseEvent) {
        $event.stopImmediatePropagation();
    }

    toggleChange() {
        if (this.toggleValue) {
            setTimeout(() => {
                this.gotoArea();
            }, 500);
        }
    }
}
