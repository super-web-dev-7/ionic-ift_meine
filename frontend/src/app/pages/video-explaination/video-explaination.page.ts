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
        console.log(new DeviceUUID().get())
        // this.router.navigate(['/category-select']);
        this.httpRequest.get_dispenseByDeviceId(new DeviceUUID().get()).subscribe((response: any) => {
            if (response.result.length > 0) {
                console.log(response)
                this.dispenseService.setDispense(response.result[0]);
                if (response.result[0].day_after === 14) {
                    this.router.navigate(['/challenge-progress'])
                } else {
                    this.router.navigate(['/before-feedback']);
                }
            } else {
                this.router.navigate(['/category-select']);
            }
        })
    }
}
