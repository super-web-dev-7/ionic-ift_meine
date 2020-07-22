import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {DeviceUUID} from 'device-uuid';

import {DispenseService} from '../../providers/dispense/dispense.service';
import {HttpService} from '../../providers/http/http.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-tagx',
    templateUrl: './tagx.page.html',
    styleUrls: ['./tagx.page.scss'],
})

export class TagxPage implements OnInit {

    dispense: any;
    feedback: any;
    isFeedback = false;

    constructor(
        public menu: MenuController,
        public dispenseService: DispenseService,
        public httpRequest: HttpService,
        public router: Router
    ) {
    }

    ngOnInit() {
        this.dispense = this.dispenseService.dispenseValue;
    }

    ionViewWillEnter() {
        this.httpRequest.get_dispenseByDeviceId(new DeviceUUID().get()).subscribe((response: any) => {
            if (response.result.length > 0) {
                this.dispenseService.setDispense(response.result[0]);
                this.dispense = this.dispenseService.dispenseValue;
            }
            this.httpRequest.get_feedback(this.dispense).subscribe(res => {
                this.feedback = res;
                this.isFeedback = this.feedback['day' + (this.dispense.Day_After + 1)] !== null;
            })
        });
    }

    openMenu() {
        this.menu.enable(true, 'menu');
        this.menu.open('menu');
    }

    daily_Success(isSuccess) {
        this.httpRequest.daily_Success(isSuccess, this.dispense.id, this.dispense.Day_After).subscribe(res => {
            this.router.navigate(['/feedback-confirmation']);
        });
    }
}
