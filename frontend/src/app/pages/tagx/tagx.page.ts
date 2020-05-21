import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {DeviceUUID} from 'device-uuid';

import {DispenseService} from '../../providers/dispense/dispense.service';
import {HttpService} from '../../providers/http/http.service';

@Component({
    selector: 'app-tagx',
    templateUrl: './tagx.page.html',
    styleUrls: ['./tagx.page.scss'],
})

export class TagxPage implements OnInit {

    private dispense: any;

    constructor(
        private menu: MenuController,
        private dispenseService: DispenseService,
        private httpRequest: HttpService
    ) {
    }

    ngOnInit() {
        this.dispense = this.dispenseService.dispenseValue;
        console.log(this.dispense);
    }

    ionViewWillEnter() {
        this.httpRequest.get_dispenseByDeviceId(new DeviceUUID().get()).subscribe((response: any) => {
            if (response.result.length > 0) {
                this.dispenseService.setDispense(response.result[0]);
                this.dispense = this.dispenseService.dispenseValue;
            }
        });
        console.log('ion view will enter')
    }

    openMenu() {
        this.menu.enable(true, 'menu');
        this.menu.open('menu');
    }

    daily_Success(isSuccess) {
        this.httpRequest.daily_Success(isSuccess, this.dispense).subscribe(res => {
        });
    }

}
