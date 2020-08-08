import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MenuController} from '@ionic/angular';
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

    deviceId: string;

    video: any = {
        url: 'https://www.youtube.com/embed/MLleDRkSuvk',
        title: 'Awesome video'
    };

    trustedVideoUrl: any = this.getVideoUrl();
    toggleValue: any = false;
    currentDispense: any;

    constructor(
        public router: Router,
        public menu: MenuController,
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
        this.currentDispense = this.dispenseService.dispenseValue;
    }

    getVideoUrl() {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);
    }

    openMenu() {
        this.menu.enable(true, 'menu');
        this.menu.open('menu')
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
