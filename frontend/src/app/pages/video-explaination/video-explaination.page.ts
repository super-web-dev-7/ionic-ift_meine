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
        private router: Router,
        private menu: MenuController,
        public loadingCtrl: LoadingController,
        private domSanitizer: DomSanitizer,
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
                this.router.navigate(['/before-feedback']);
            } else {
                this.router.navigate(['/category-select']);
            }
        })
    }
}
